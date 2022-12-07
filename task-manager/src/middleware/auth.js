const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req, res, next) => {
    try {
	console.log('auth middleware')
	    const token = req.headers['authorization'].replace('Bearer ', '');
	    // console.log(jwt.verify(token, 'thisismynewcourse'))
	    const decoded = jwt.verify(token, 'thisismynewcourse')
	    const user = await User.findOne({ _id: decoded._id, "tokens.token": token })
	    // console.log("user", user)
	    if (!user){
	        throw new Error('Not authenticated')
	    }
        req.user=user
	    next()
} catch (error) {
    console.log(error)
    res.send(error)
}
}

module.exports = auth
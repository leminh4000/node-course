const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req, res, next) => {
    console.log("auth middleware")
    console.log({...req.body})
    try {
        const token = req.header('authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, "tokens.token": token })
        if (!user) {
            throw new Error('Not authenticated')
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = auth
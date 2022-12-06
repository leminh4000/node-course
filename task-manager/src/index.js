const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
// var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3004
/*app.use((req, res, next) => {
    console.log(req.method, req.path)
    res.status(503).send('Maintainance')
    // next()
})*/

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

 const jwt = require('jsonwebtoken')

const myCrypt= async () => {
    const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn:'7 days'})
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myCrypt() 
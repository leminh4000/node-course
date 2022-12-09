const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require("./models/task");
const User = require("./models/user");
// var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3004

const multer = require('multer')
const upload = multer({
    dest  : 'images',
    limits: {
        fileSize: 100 * 1024,
    },
    fileFilter(req, file, cb) {
        // console.log(file)
        if (!file.originalname.match(/\.(jpg||jpeg||png)$/)) {
            return cb(new Error('You must upload an image file'))
        }
        cb(undefined, true)
    },

})

// const errMiddleware = (req, res, next) => {
//     throw new Error('I am in error middleware')
// }

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (err, req, res, next) => {
    res.status(400).send({error: err.message})
})

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})


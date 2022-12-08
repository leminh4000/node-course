const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require("./models/task");
const User = require("./models/user");
// var bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3004

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

const main = async () => {
    // const task = await Task.findById('63916e36f1b58ab889c0eeb3')
    // await task.populate('owner');
    // console.log(task.owner)

    const user= await User.findById('6391749e4becb9cb9b68355c')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()
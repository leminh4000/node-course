const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
// var bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));


app.post('/users', (req,res)=>{
    console.log('post');
    console.log(req.body);

    const user=new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch(err=>{
        console.log(err)
        res.status(304).send(err)
    })
});

app.get('/users', (req,res)=>{
    User.find({}).then(users=>{
        res.send(users)
    }).catch(err=>{
        res.status(500).send(err)
    })
});

app.get('/users/:id', (req,res)=>{
    User.findById(req.params.id).then(user=>{
        if (!user) return res.status(404).send()
        res.send(user)
    }).catch(err=>{
        console.log(err)
        res.status(500).send()
    })
});


app.post('/tasks', (req,res)=>{
    console.log('post');
    console.log(req.body);

    const task=new Task(req.body)
    task.save().then(()=>{
        res.send(task)
    }).catch(err=>{
        console.log(err)
        res.status(304).send(err)
    })
});

app.get('/tasks', (req,res)=>{
    Task.find({}).then(tasks=>{
        res.send(tasks)
    }).catch(err=>{
        res.status(500).send(err)
    })
});

app.get('/tasks/:id', (req,res)=>{
    Task.findById(req.params.id).then(task=>{
        if (!task) return res.status(404).send()
        res.send(task)
    }).catch(err=>{
        res.status(500).send()
    })
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})

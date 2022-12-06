const express = require('express')
const Task = require('../models/task')
const router = express.Router()

router.post('/tasks', async (req, res) => {
    console.log('post');
    console.log(req.body);

    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        console.log(err)
        res.status(304).send(err)
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(304).send(err)
    }
});

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed']
    const isValidOperator = updates.every(update => {
        return allowedUpdates.includes(update)
    })
    if (!isValidOperator) {
        return res.status(400).send({ error: 'Invalid updates' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(304).send(err)
    }
});


router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (err) {
        res.status(500).send(err)
    }
});

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) return res.status(404).send()
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
});


module.exports = router;
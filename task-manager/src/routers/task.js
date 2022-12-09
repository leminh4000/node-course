const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = express.Router()

router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        console.log(err)
        res.status(304).send(err)
    }
});

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOne({
            _id  : req.params.id,
            owner: req.user._id
        })
        if (!task) return res.status(404).send()
        task.delete()
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(304).send(err)
    }
});

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = [
        'description',
        'completed'
    ]
    const isValidOperator = updates.every(update => {
        return allowedUpdates.includes(update)
    })
    if (!isValidOperator) {
        return res.status(400).send({error: 'Invalid updates'})
    }

    try {
        const task = await Task.findOne({
            _id  : req.params.id,
            owner: req.user.id
        })

        if (!task) return res.status(404).send()

        updates.forEach((update) => task[update] = req.body[update])

        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
});


router.get('/tasks', auth, async (req, res) => {
    let match = {};
    if (req.query.completed) {
        match = {completed: req.query.completed === 'true'};
    }

    const sort = {}
    if (req.query.sortBy) {
        const parts=req.query.sortBy.split(':');
        sort[parts[0]] = (parts[1]==='desc') ? -1 : 1
        console.log('sort',sort)
    }

    try {
        // const tasks = await Task.find({owner: req.user._id})
        await req.user.populate(
            {
                path   : 'tasks',
                match,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort,
                },
            })
        res.send(req.user.tasks)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
});

router.get('/tasks/:id', auth, async (req, res) => {
    let _id = req.params.id;
    console.log(req.user)
    try {
        const task = await Task.findOne({
            _id,
            owner: req.user._id
        })
        console.log(task)

        if (!task) return res.status(404).send()
        res.send(task)
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
});


module.exports = router;
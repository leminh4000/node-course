const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://192.168.1.126:27017/task-manager-api', {
    useNewUrlParser: true,

    // useCreateIndex: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error(`Invalid age`);
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email`);
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength:7,
        trim: true,
        validate(value) {
            if (value.includes('password')) {
                throw new Error(`Password must not contain 'password'`);
            }
        }
    }
})

// const me = new User({ name: '  Minh', email: 'Test@test.com ', password: '1234567'})
// me.save().then(() => {
//     console.error(me);
// }).catch(err => {
//     console.error('ERROR!!!!', err);
// })

const Task = mongoose.model('Task', {
    description: { 
        type: String,
        requred: true,
        trim: true,
    },
    completed: { 
        type: Boolean, 
        requred: true,
        default: false, 
    },
})

const myTask = new Task({description:"    Learn nodejs "})

myTask.save()
.then(()=>console.log(myTask))
.catch((err) => {console.log(err)})
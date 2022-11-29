const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;
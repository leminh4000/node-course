const {
    TextEncoder,
    TextDecoder
} = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder

const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

let userOneId = new mongoose.Types.ObjectId()
let userOne = {
    _id       : userOneId,
    "name"    : "Minh",
    "email"   : "minh@example.com",
    "password": "12345678",
    tokens    : [
        {
            token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
        }
    ]
};

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should sign up a new user', async () => {

    let response = await request(app).post('/users/signup').send({
        "name"    : "Andrew Mead",
        "email"   : "andrew@example.com",
        "password": "12345678"
    }).expect(201);

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull();

    expect(response.body).toMatchObject({
        user:{
            name: "Andrew Mead",
            email: "andrew@example.com"
        },
        // token: user.tokens[0].token
    })

    expect(user.password).not.toBe('12345678')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email   : userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/signup').send({
        user    : "minh2",
        password: "12345678",
    }).expect(400)
})

test('Should get profile for authorization user', async () => {
    await request(app).get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should get profile for unauthenticated user', async () => {
    await request(app).get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app).delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOne._id)
    expect(user).toBeNull()
})

test('Should delete account for unauthenticated user', async () => {
    await request(app).get('/users/me')
        .send({
            user    : "minh2",
            password: "12345678",
        })
        .expect(401)
})




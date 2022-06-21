const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: str => md5(str),
        select: false
    },
    bio: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
        select: false
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        select: false
    },
})

module.exports = userSchema
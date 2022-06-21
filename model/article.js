const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    "slug": {
        type: String,
        required: true
    },
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        default: null
    },
    "body": {
        type: String,
        required: true
    },
    "tagList": {
        type: [String],
        default: []
    },
    "createdAt": {
        type: Date,
        default: Date.now
    },
    "updatedAt": {
        type: Date,
        default: Date.now
    },
    "favorited": {
        type: Boolean,
        default: false
    },
    "favoritesCount": {
        type: Number,
        default: 0
    },
    "author": {
        type: {
            username: {
                type: String,
                required: true
            },
            bio: {
                type: String,
                default: null
            },
            image: {
                type: String,
                default: null
            },
            following: {
                type: Boolean,
                default: false
            }
        },
        required: true
    }
})
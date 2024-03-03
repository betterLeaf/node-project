const mongoose = require("mongoose")
const { Schema } = mongoose;
const md5 = require('../util/md5')
const baseModel = require('./baseModel')


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set: value => md5(value),
        select: false
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    ...baseModel
})

module.exports = UserSchema


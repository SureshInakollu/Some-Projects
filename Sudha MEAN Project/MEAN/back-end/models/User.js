const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    role: {
        type:{},
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    blood_groop: {
        type: String,
        required: true
    },
    date_of_joining: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    mail_address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;
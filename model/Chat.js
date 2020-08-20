const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create chat schema
const chatSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rooms'
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Chat = mongoose.model('chats', chatSchema)
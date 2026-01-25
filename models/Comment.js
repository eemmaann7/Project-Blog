const mongoose = require('mongoose')

// Schema

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    post:{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

// Model
const Comment = mongoose.model('Comment',commentSchema)

// Anytime in express we want to export
module.exports = Comment
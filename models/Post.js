const mongoose = require('mongoose')

// Schema

const postSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    catagory: {
        type: mongoose.Types.ObjectId,
        ref: 'Catagory'
    }
})

// Model
const Post = mongoose.model('Post',postSchema)

// Anytime in express we want to export
module.exports = Post
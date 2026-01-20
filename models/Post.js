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
    auther: {
    },
    catagory: {
    } 
})

// Model
const Post = mongoose.model('Post',PostSchema)

// Anytime in express we want to export
module.exports = Post
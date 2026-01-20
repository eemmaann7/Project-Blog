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
        type: mongoose.Types.ObjectId,
        ref: 'usernmae'
    },
    catagory: {
        type: mongoose.Types.ObjectId,
        ref: 'catagory'
    } 
})

// Model
const Post = mongoose.model('Post',postSchema)

// Anytime in express we want to export
module.exports = Post
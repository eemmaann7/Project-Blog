const mongoose = require('mongoose')

// Schema

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    post:{
    },
    user:{

    }
})

// Model
const Comment = mongoose.model('Comment',commentSchema)

// Anytime in express we want to export
module.exports = Comment
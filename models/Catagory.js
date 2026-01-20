const mongoose = require('mongoose')

// Schema

const catagorySchema = new mongoose.Schema({
    catagory: {
        type: String,
        required: true
    },
    discription:{
        trype: String
    }
})

// Model
const Catagory = mongoose.model('Catagory',catagorySchema)

// Anytime in express we want to export
module.exports = Catagory
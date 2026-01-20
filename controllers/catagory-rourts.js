const router = require('express').Router()
const Post = require('../models/Post')
const Catagory = require('../models/Catagory')
const Comment = require('../models/Comment')
const User = require('../models/User')

router.get('/',(req,res)=>{
    res.render('catagory/catagory.ejs')
})

module.exports = router
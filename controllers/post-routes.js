const router = require('express').Router()
const Post = require('../models/Post')
const Catagory = require('../models/Catagory')
const Comment = require('../models/Comment')
const User = require('../models/user')


router.get('/',async (req,res)=>{
    const allPost = await Post.find() // gets all the posts
    res.render('posts/all-post.ejs', {allPost:allPost}) 
})

module.exports = router
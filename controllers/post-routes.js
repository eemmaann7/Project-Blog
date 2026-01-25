const router = require('express').Router()
const Post = require('../models/Post')
const Catagory = require('../models/Catagory')
const Comment = require('../models/Comment')
const User = require('../models/User')


router.get('/',async (req,res)=>{
    const allPost = await Post.find() // gets all the posts
    res.render('posts/all-post.ejs', {allPost:allPost}) 
})


router.get('/new',(req,res)=>{
    if(!req.session.user){
        return res.redirect('/auth/sign-in')
    }
    res.render('posts/create-post.ejs') // shows create form
})
router.post('/', async (req,res)=>{
    try{
    const createdPost = await Post.create(req.body) // create the post
    res.redirect('/posts') 
    }
    catch(err){
        console.log(err)
    }
})








module.exports = router
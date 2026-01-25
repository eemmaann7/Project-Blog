const router = require('express').Router()
const Post = require('../models/Post')
const Catagory = require('../models/Catagory')
const Comment = require('../models/Comment')
const User = require('../models/User')


router.get('/',async (req,res)=>{
    const allPost = await Post.find().populate('author') // gets all the posts
    res.render('posts/all-post.ejs', {allPost:allPost}) 
})


router.get('/new',(req,res)=>{
    if(!req.session.user){ // shows create form
        return res.redirect('/auth/sign-in')
    } 
    res.render('posts/create-post.ejs') 
})
router.post('/', async (req,res)=>{
  if(!req.session.user){
    return res.redirect('/auth/sign-in')
  } try{
    await Post.create({
    postTitle: req.body.postTitle,
    content: req.body.content,
    author: req.session.user._id
    })
    res.redirect('/posts')
  } catch(err){
    console.log(err)
  }
})


router.get('/:id', async(req,res)=>{ //get post details
  const foudPost = await Post.findById(req.params.id).populate('catagory')
  res.render('posts/post-details.ejs', {post: foudPost})
})

router.post('/:id/delete', async(req, res)=>{
  if(!req.session.user) { //delete the post
    return res.redirect('/auth/sign-in')
  }
  try{
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/posts')
  } catch(err){
    console.log(err)
  }
})










module.exports = router
const router = require('express').Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')


router.get('/',async (req,res)=>{
  try{
    const allPost = await Post.find().populate('athuor') // gets all the posts
    res.render('posts/all-post.ejs', {allPost:allPost})
  } catch(err){
    cosole.log(err)
  }
})


router.get('/new',(req,res)=>{
    if(!req.session.user){ // shows create form
        return res.redirect('/auth/sign-in')
    } 
    res.render('posts/create-post.ejs') 
})


router.post('/', async (req,res)=>{
  if(!req.session.user){ //create new post 
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
  const foundPost = await Post.findById(req.params.id)
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


router.get('/:id/edit', async(req,res)=>{
  if (!req.session.user) {
    return res.redirect('/auth/sign-in')
  }
  const foundPost = await Post.findById(req.params.id)
  res.render('posts/edit-post.ejs', { post: foundPost })
})

router.post('/:id/edit',async(req,res)=>{
  if (!req.session.user) {
    return res.redirect('/auth/sign-in')
  }
  try {
    await Post.findByIdAndUpdate(req.params.id,{
      postTitle: req.body.postTitle,
      content: req.body.content
    })
    res.redirect('/posts', +req.params.id)
  } catch (err) {
    console.log(err)
  }
})









module.exports = router
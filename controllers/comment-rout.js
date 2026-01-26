const router = require('express').Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')


router.post('/:id/comments',async(req, res)=>{
  if (!req.session.user)
    return res.redirect('/auth/sign-in')
  try{
    const postId = req.params.id
    const comment = await Comment.create({
      content: req.body.content,
      author: req.session.user._id,
      post: postId
    })
    const post = await Post.findById(postId)
    post.comments.push(comment._id)
    await post.save()
    res.redirect('/posts/'+ postId)
  } catch (err) {
    console.log(err)
    res.redirect('/posts/'+ req.params.id)
  }
})

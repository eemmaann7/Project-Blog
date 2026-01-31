const router = require('express').Router()
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const User = require('../models/User')


router.post('/posts/:postId', async(req,res)=>{
  if (!req.session.user)
    return res.redirect('/auth/sign-in')
  try {
    const postId = req.params.postId
    const comment = await Comment.create({
      content: req.body.content,
      author: req.session.user._id,
      post: postId
    })
    
    //get the post and create the comment 
    const post = await Post.findById(postId)
    post.comments.push(comment._id)
    await post.save()

    res.redirect('/posts/' + postId)
  } catch (err) {
    console.log(err)
    res.redirect('/posts')
  }
})



router.post('/:commentId/delete/:postId',async(req, res)=>{
  if (!req.session.user)
    return res.redirect('/auth/sign-in')
  try {
    const { commentId, postId } = req.params
    const comment = await Comment.findById(commentId)

    // if the author then delete the comment 
    if(!comment.author.equals(req.session.user._id)) {
      return res.redirect('/posts/' + postId)
    }

    await Comment.findByIdAndDelete(commentId)
    const post = await Post.findById(postId)
    post.comments.pull(commentId)
    await post.save()

    res.redirect('/posts/' + postId)
  } catch (err) {
    console.log(err)
    res.redirect('/posts')
  }
})








module.exports = router
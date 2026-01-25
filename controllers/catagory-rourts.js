const router = require('express').Router()
const Post = require('../models/Post')
const Catagory = require('../models/Catagory')
const Comment = require('../models/Comment')
const User = require('../models/User')


// GET all categories
router.get('/', async (req, res)=>{
  try{
    const categories = await Catagory.find().populate('catagory')
    res.render('catagory/catagory.ejs', { categories })
  } catch (err) {
    console.error(err)
    res.send('Error loading categories')
  }
})


module.exports = router
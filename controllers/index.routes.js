const router = require("express").Router()

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus.ejs')
})


module.exports = router;
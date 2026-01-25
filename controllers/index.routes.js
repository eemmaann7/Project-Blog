const router = require("express").Router()

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})

router.get('/us',(req,res)=>{
    res.render('aboutUs.ejs')
})


module.exports = router;
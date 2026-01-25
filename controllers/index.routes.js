const router = require("express").Router()

router.get('/',(req,res)=>{
    res.render('homepage.ejs')
})

router.get('/',(req,res)=>{
    res.render('aboutUs.ejs')
})


module.exports = router;
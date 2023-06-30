const express=require('express')
const router=express.Router()
const {loginUser,signupUser,getUser}=require('../controllers/userController')

//login
router.post('/login',loginUser)

//signup
router.post('/signup',signupUser)

//get all
router.get('/getall',getUser)


module.exports=router
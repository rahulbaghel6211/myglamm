const express=require("express");
const User=require("../models/user.models")
const router=express.Router();


router.post("/rahul123",async(req,res)=>{
 try {
     const user= await User.create(req.body)
     return res.send(user)

     
 } catch (err) {
   return res.status(500).send({message:err.message})
     
 }
})


router.get("/rahul123",async(req,res)=>{
    try {
        const user= await User.find().lean().exec()
        return res.send(user)
   
        
    } catch (err) {
      return res.status(500).send({message:err.message})
        
    }
   })

module.exports=router;
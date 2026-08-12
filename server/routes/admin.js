const Admin = require('../models/admin');
const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

router.post(`/login` , async(req,res) =>{
    const {username, password} = req.body;
    try{
        const existingUser = await Admin.findOne({username : username, password: password});
        if(!existingUser){
        return res.status(404).json({msg:'user not found'})
        }

        // const matchPassword= await bcrypt.compare(password , existingUser.password);
        // if(!matchPassword){
        //     return res.status(404).json({msg:"invalid password"})
        // }

        const token = jwt.sign({username: existingUser.username , id: existingUser._id},
            process.env.JSON_WEB_TOKEN_SECRET_KEY
        );

        return res.status(200).json({
            message:'Welcome Back',
            user:existingUser,
            token:token
        })
    }catch(err){
        res.status(404).json({message:"smth went wrong"})
    }
})


module.exports=router;
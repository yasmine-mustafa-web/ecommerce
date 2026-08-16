const express = require("express");
const router = express.Router();
const Newsletter =  require('../models/Newsletter');

router.post("/" , async (req,res) =>{

    const {email} = req.body;

if (!email){
    return res.status(400).json({message:"Email is required!"});
}

try{
    const existing = await Newsletter.findOne({email})
    if(existing){
        return res.status(400).json({message:"This email is already subscribed"})
    }

    const subscriber =  new Newsletter({email});
    await subscriber.save();

    res.status(201).json({message:"Subscribed Successfully"})
}catch(err){
    res.status(500).json({message:"Server error , please try again"})
}
}
)

module.exports= router;
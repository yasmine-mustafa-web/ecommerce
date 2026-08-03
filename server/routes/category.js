const mongoose= require('mongoose');
const { cloudinary } = require('../cloudinary');
const {Category} = require('../models/category');
const express = require('express');
const pLimit = require('p-limit');
const router = express.Router();


router.get('/' , async(req,res) =>{
    const categoryList = await Category.find();
    if(!categoryList){
      return  res.status(500).json({success:false})
    }
    res.send(categoryList);
})

router.get('/:id' , async(req,res) =>{
const category =  await Category.findById(req.params.id);
if(!category){
return    res.status(500).json({message:'The category whith this id is not existing'})
}
return res.status(201).send(category);
})

router.post('/' , async(req,res) =>{
    console.log(req.body);
    const limit = pLimit(3);

    const imagesToUpload = req.body.images.map((img)=>{
        return limit (async()=>{
            const result = await cloudinary.uploader.upload(img);
            return result;
        })
    })
    const uploadStatus = await Promise.all(imagesToUpload);

const imgUrl = uploadStatus.map((item)=>{
    return item.secure_url
})

if(!uploadStatus){
    return res.status(500).json({
        error:'images cannot be uploaded',
        status:false
    })
}

let category = new Category({
    name:req.body.name,
    images:imgUrl
})

if(!category){
 return   res.status(500).json({
        message:'cannot create category'
        
    })
}

category =await category.save();

return res.status(201).json(category);
})

router.delete('/:id' , async(req,res) =>{
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if(!deletedCategory){
      return  res.status(404).json({
            message:"category not found",
            success:false
        })
    }
 return   res.status(200).json({
        message:'category is deleted',
        success:true
    })
})

module.exports=router;
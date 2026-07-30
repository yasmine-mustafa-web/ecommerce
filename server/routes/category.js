const { Promise } = require('mongoose');
const { cloudinary } = require('../cloudinary');
const {Category} = require('../models/category');
const express = require('express');
const pLimit = require('p-limit');
const router = express.Router();


router.get('/' , async(req,res) =>{
    const categoryList = await Category.find();
    if(!categoryList){
        res.status(500).json({success:false})
    }
    res.send(categoryList);
})

router.get('/:id' , async(req,res) =>{
const category =  await Category.findById(req.params._id);
if(!category){
    res.status(500).json({message:'The category whith this id is not existing'})
}
return res.status(201).send(category);
})

router.post('/create' , async(req,res) =>{
    console.log(req.body);
    const limit = pLimit(3);

    const imagesToUpload = req.body.images.map((img)=>{
        return limit (async()=>{
            const result = await cloudinary.uploader.upload(img);
            return result;
        })
    })
})

router.delete('/:id' , async(req,res) =>{
    const deletedUser = await Category.findByIdAndRemove(req.params._id);

    if(!deletedUser){
        res.status(404).json({
            message:'category not found',
            success:false
        })
    }
    res.status(201).json({
        message:'category is deleted',
        success:true
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
    res.status(500).json({
        error:err,
        status:false
    })
}

category =await category.save();

res.status(201).json(category);
})

module.exports=router;
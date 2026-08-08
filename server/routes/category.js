const mongoose= require('mongoose');
const { cloudinary } = require('../cloudinary');
const {Category} = require('../models/category');
const express = require('express');
const pLimit = require('p-limit');
const router = express.Router();
const Product = require('../models/product');


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
    try{
    console.log(req.body);

    const result = await cloudinary.uploader.upload(req.body.image);

    if(!result){
    return  res.status(500).json({
    error:'image cannot be upload',
    status:false
    
})
}

let category = new Category({
    name:req.body.name,
    image:result.secure_url
})

if(!category){
 return   res.status(500).json({
        message:'cannot create category'
        
    })
}

category =await category.save();

return res.status(201).json(category);
    }catch(error){
           return res.status(500).json({
            message: 'cannot create category',
            error: error.message
        });
    }

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
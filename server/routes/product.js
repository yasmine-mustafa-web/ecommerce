const {Category} =  require('../models/category');
const Product = require('../models/product');
const express=require('express');
const router=express.Router();
const pLimit = require('p-limit');
const { cloudinary } = require("../cloudinary/index");
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });


router.get('/' , async(req,res) =>{
    const productList= await Product.find().populate('category');
    if(!productList){
        return res.status(500).json({success:false})
    }
    res.send(productList);
})

router.post('/' , async(req,res) =>{
    const categories=await Category.find({
    _id: { $in: req.body.category }
});

if (categories.length !== req.body.category.length) {
    return res.status(404).send('invalid category');
}

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
    
    if(!uploadStatus  || uploadStatus.length === 0){
        return res.status(500).json({
            error:'images cannot be uploaded',
            status:false
        })
    }
    

    let product= new Product({
        name:req.body.name,
        description:req.body.description,
        images:imgUrl,
        brand:req.body.brand,
        countInStock:req.body.countInStock,
        price:req.body.price,
        rating:req.body.rating,
        category:req.body.category,
        isFeatured:req.body.isFeatured,
        type:req.body.type,
        MFG:req.body.MFG,
        life:req.body.life
    });


    product= await product.save();
    if(!product){
        return res.status(500).json({
            message:"can't create product",
            success:false
        })
    }
   return res.status(201).json(product);
})
router.get('/:id' , async(req,res) =>{
    const product =  await Product.findById(req.params.id);
    if(!product){
        res.status(404).json({message:"product with that id is not found"})
    }
    return  res.status(200).send(product)   
})
router.put('/:id' , upload.array('images') , async(req,res) =>{
   try {
        const existingProduct = await Product.findById(req.params.id);
        if (!existingProduct) return res.status(404).json({ message: 'product not found', status: false });

        let imgUrl = existingProduct.images;
        if (req.files && req.files.length > 0) {
            const results = await Promise.all(
                req.files.map(file => cloudinary.uploader.upload(file.path))
            );
            imgUrl = results.map(r => r.secure_url);
            req.files.forEach(file => fs.unlink(file.path, () => {}));
        }

        const product = await Product.findByIdAndUpdate(req.params.id, {
             name: req.body.name,
            description: req.body.description,
            images: imgUrl,
            brand: req.body.brand,
            countInStock: req.body.countInStock,
            price: req.body.price,
            rating: req.body.rating,
            category: req.body.category,
            isFeatured: req.body.isFeatured,
            type:req.body.type,
            MFG:req.body.MFG,
            life:req.body.life
        }, { new: true });
        if (!product) return res.status(404).json({ message: "the product cannot be updated", status: false });
        return res.status(200).json(product);
    } catch (error) {
        console.log("error:",error);
         console.log("ERROR JSON:", JSON.stringify(error, null, 2));
         return res.status(404).json({ message: 'update failed', error: error.message || error });
    }
});

router.delete('/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'product not found', status: false });
    return res.status(200).send({ message: 'the product is deleted', status: true });

})
module.exports=router;
const mongoose= require('mongoose');
const {Schema}=mongoose;


const productSchema= new Schema({
name:{
    type:String,
    required:true
},
images:[{
    type:String,
    required:true
}],
description:{
    type:String,  
    required:true
},
brand:{
        type:String,  
    default:''
},
price:{
    type:Number,
    default:0
},
category:[{
    type:Schema.Types.ObjectId,
    ref:'Category',
    required:true
}],
countInStock:{
    type:Number,
    required:true
},
rating:{
    type:String,
    default:0
},
isFeatured:{
    type:Boolean,
    default:false
},
MFG:{
    type:Date,
    required:true   
},
type:{
    type:String,
    required:true
},
life:{
    type:String,
    required:true
}
})
module.exports = mongoose.model('Product' , productSchema);
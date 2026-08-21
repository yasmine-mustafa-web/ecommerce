const mongoose = require('mongoose');
const {Schema} = mongoose;


const orderSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    customerName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    items:[
        {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true }
        }
    ],
    total:{
        type:Number,
        required:true
    },
    subtotal:{ type:Number,
    required:true },

    discount:{ type:Number,
    required:true,
    default:0 },

    shippingCost:{ type:Number,
    required:true,
    default:0 },
 
    status:{
        type:String,
        enum:["pending","confirmed","shipped","delivered","cancelled"],
        default:"pending" } }, { timestamps: true })


module.exports = mongoose.model('Order' , orderSchema);
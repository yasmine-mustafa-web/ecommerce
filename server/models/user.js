const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    }

})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
})


module.exports=mongoose.model('User' , userSchema);
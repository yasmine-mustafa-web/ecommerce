const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
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

})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
})


module.export=mongoose.model('User' , userSchmea);
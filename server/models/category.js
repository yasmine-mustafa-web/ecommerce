const mongoose =  require('mongoose');
const { type } = require('node:os');
const {Schema} =  mongoose;

const categorySchema = Schema({
    name:{
        type:String,
        required:true
    },
    images:[
        {
      type:String,
        required:true
        }
    ]
})

exports.Category = mongoose.model('Category' , categorySchema);
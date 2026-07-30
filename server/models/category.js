const mongoose =  require('mongoose');
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
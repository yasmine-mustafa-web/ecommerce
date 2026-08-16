const mongoose = require('mongoose');
const {Schema} = mongoose;

const newsletterSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
},
{timestamps:true}
)

module.exports = mongoose.model('Newsletter' , newsletterSchema);
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


categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
})

categorySchema.set('toJSON' , {
    virtuals:true,
})

exports.Category = mongoose.model('Category' , categorySchema);
exports.categorySchema= categorySchema;
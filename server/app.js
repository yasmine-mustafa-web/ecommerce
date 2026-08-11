require('dotenv/config');
const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const plimit = require('p-limit')
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const authJwt = require("../server/helper/jwt");
console.log('Cloudinary key loaded:', !!process.env.CLOUDINARY_KEY);

app.use(cors(
    {
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true
}
));
app.options('/*splat',cors());

main().catch(err => {
    console.log(err);
    console.log('there is an errorr');
});
async function main() {
        await mongoose.connect(
        'mongodb://yasminealyy:yasmina12@ac-slz8z22-shard-00-00.nuxgayy.mongodb.net:27017,ac-slz8z22-shard-00-01.nuxgayy.mongodb.net:27017,ac-slz8z22-shard-00-02.nuxgayy.mongodb.net:27017/e-commerce?ssl=true&replicaSet=atlas-11c28c-shard-0&authSource=admin&appName=Cluster0'
    );
    console.log('connected')
}
// mongoose.connect(process.env.CONNECTION_STRING,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(() =>{
//     console.log('database is working')
// })
// .catch((e) =>{
//     console.log('error:' , e)
// })
app.use(express.json());
app.use(authJwt({ secret:process.env.JSON_WEB_TOKEN_SECRET_KEY, algorithms: ['HS256'] }).unless({
    path: [
      '/api/user/signup',
      '/api/user/signin',
      '/api/admin/login'
    ]
}));

app.use(`/api/user` , userRouter)
app.use(`/api/categories` , categoryRoutes);
app.use(`/api/products` , productRoutes);
app.use(`/api/admin` , adminRouter);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ msg: 'Invalid or missing token' });
  }
  next(err);
});

app.listen(process.env.PORT ,()=>{
    console.log(`is running on ${process.env.PORT}`)
})
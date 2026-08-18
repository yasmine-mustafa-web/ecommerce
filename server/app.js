require('dotenv/config');
const express = require('express');
const app=express();
const mongoose = require('mongoose');
const cors=require('cors');
const categoryRoutes=require('./routes/category');
const productRoutes=require('./routes/product');
const plimit = require('p-limit')
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const authJwt = require("../server/helper/jwt"
);
const newsletterRouter = require('./routes/newsletter');
const orderRouter = require("./routes/order");
console.log('Cloudinary key loaded:', !!process.env.CLOUDINARY_KEY);

app.use(cors(
    {
    origin: ["https://ecommerce-gvhn.vercel.app", "https://admin-dashboard-flax-nu-76.vercel.app" ,
        "http://localhost:3000" , "http://localhost:3001"
    ],
    credentials: true
}
));
app.options('/*splat',cors());

main().catch(err => {
    console.log(err);
    console.log('there is an errorr');
});
async function main() {
        await mongoose.connect(process.env.CONNECTION_STRING)
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
app.use(express.json({ limit: '50mb' }));
app.use(authJwt({ secret:process.env.JSON_WEB_TOKEN_SECRET_KEY, algorithms: ['HS256'] }).unless({
    path: [
      '/api/user/signup',
      '/api/user/signin',
      '/api/admin/login',
      { url: /^\/api\/categories/, methods: ['GET'] },
      { url: /^\/api\/categories/, methods: ['POST'] },
      { url: /^\/api\/products/, methods: ['GET'] },
      { url: /^\/api\/products/, methods: ['POST'] }
    ]
}));

app.use(`/api/user` , userRouter)
app.use(`/api/categories` , categoryRoutes);
app.use(`/api/products` , productRoutes);
app.use(`/api/admin` , adminRouter);
app.use("/api/orders", orderRouter);
app.use(`/api/newsLetter` , newsletterRouter );

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ msg: 'Invalid or missing token' });
  }
  next(err);
});

app.listen(process.env.PORT ,()=>{
    console.log(`is running on ${process.env.PORT}`)
})
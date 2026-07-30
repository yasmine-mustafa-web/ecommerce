const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const categoryRoutes=require('./routes/category');
const plimit = require('p-limit')
require('dotenv/config');

app.use(cors());
// app.options('/*splat',cors());

main().catch(err => {
    console.log(err);
    console.log('there is an errorr');
});
async function main() {
    await mongoose.connect('mongodb://yasminealyy:yasmina12@ac-slz8z22-shard-00-00.nuxgayy.mongodb.net:27017,ac-slz8z22-shard-00-01.nuxgayy.mongodb.net:27017,ac-slz8z22-shard-00-02.nuxgayy.mongodb.net:27017/e-commerce?ssl=true&replicaSet=atlas-11c28c-shard-0&authSource=admin&appName=Cluster0'

    )

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
app.use(bodyParser.json());

app.use(`/api/category` , categoryRoutes);

app.post('/test', (req, res) => {
    console.log("TEST ROUTE HIT");
    res.json({ message: "Working" });
});

app.listen(process.env.PORT ,()=>{
    console.log(`is running on ${process.env.PORT}`)
})
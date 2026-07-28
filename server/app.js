const express = require();
const app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv/config');

app.use(cors());
app.options('*',cors());

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>{
    console.log('database is working')
})
.catch((e) =>{
    console.log('error:' , e)
})
app.use(bodyParser.json());


app.listen(process.env.PORT ,()=>{
    console.log('is running')
})
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// 
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MONGODB');
}).catch((err)=>{
    console.log(err);
})


const app= express();

const a = 10;
app.listen(3000, ()=>{
    console.log("server running at port : 3000!");
})
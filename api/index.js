import express from 'express';


const app= express();

const a = 10;
app.listen(3000, ()=>{
    console.log("server running at port : 3000!");
})
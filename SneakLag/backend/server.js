const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config()

const userRoutes=require('./routes/user')
const shoeInventoryRoutes=require('./routes/shoeinventory')




//express app

const app=express();

app.use(cors());

//middleware

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
//routes
app.use("/api/shoeinventory",shoeInventoryRoutes)

app.use('/api/user',userRoutes);


mongoose.connect(process.env.URL).then(()=>{
    app.listen(4000,()=>{
        console.log("Connected to Db,listening on port 4000 ")
    })
}).catch(err=>console.log(err));


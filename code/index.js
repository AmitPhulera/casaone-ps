const express = require("express");
const mongoose = require("mongoose");
const routes = require("./config/routes");
const {dbHost,db} = require("./config/dbConfig");
const app =  express();
const PORT = 8080;

// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
app.use("/",routes);
app.listen(PORT,async ()=>{
    await connectDB();
    console.log("DB connected");
    console.log("Dev Server Started");
})

async function connectDB(){
    try{
        const url = `mongodb://${dbHost}/${db}`;
        const connect = await mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true });
        return connect.connection;
    }catch(err){
        console.error(err);
        process.exit(1);
    }
}
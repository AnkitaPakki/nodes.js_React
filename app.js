const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const crypto = require('crypto');
const uuidv1=require('uuidv1');

const dotenv= require('dotenv');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI,{useNewUrlParser:true})
    .then(() => console.log("DB Connected"));

mongoose
    .connection.on("error",err => {

        console.log(`DB Connection error:${err.message}`);

    });
    //bring in routes
    const postRoute= require('./routes/post');
    const authRoutes =require('./routes/auth');

    //middleware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());

app.use("/",postRoute);
app.use("/", authRoutes);

const port=8080;
app.listen(port,()=>{

console.log(`a node.js api is on `);

});


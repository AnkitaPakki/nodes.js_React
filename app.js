const express = require('express');
const app = express();
const postRoute= require('./routes/post')


app.use("/",postRoute);


app.listen(8080);
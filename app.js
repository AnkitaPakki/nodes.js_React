const express = require('express');
const app = express();
const postRoutes= require('./routes/post')


app.get("/",postRoutes.getposts);


app.listen(8080);
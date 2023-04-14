require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const path = require("path")
const app = express();
const mongoose = require('mongoose');
require("./db/conn")
const users=require("./models/userSchema")
const cors = require('cors');
const router = require ("./routes/router")
const port = process.env.PORT || 8003;

app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*", function(req,res){
   res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
app.listen(port,()=>{console.log(`Server is Running at ${port}`)}) //string literals use ``,${}//
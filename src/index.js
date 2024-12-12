const express = require("express");
const dotenv = require("dotenv").config()    
const dbConnect = require("./config/dbConnect")

dbConnect();


const app = express();

// Middlewares 
app.use(express.json());

// Routes 


// Run the server 
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is runnnig at port ${PORT}`);
});


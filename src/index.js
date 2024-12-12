const express = require("express");
const dotenv = require("dotenv").config()    
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")

// Db connection 
dbConnect();


const app = express();

// Middlewares 
app.use(express.json());

// Routes 
app.use("/api/auth", authRoutes);


// Run the server 
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is runnnig at port ${PORT}`);
});


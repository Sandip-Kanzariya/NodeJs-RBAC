const express = require("express");
const dotenv = require("dotenv").config()    
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const userRouters = require("./routes/userRoutes")

// Db connection 
dbConnect();


const app = express();

// Middlewares 
app.use(express.json());

// Routes 
app.use("/api/auth", authRoutes);
app.use("/api/users", userRouters)

// Run the server 
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is runnnig at port ${PORT}`);
});


const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Only For Teachers
router.get("/teacher", verifyToken, (req, res) => {
    res.json({message: "Welcome Teacher !"});
});

// Both Teachers and Students 
router.get("/user", verifyToken, (req, res) => {
    res.json({message: "Welcome All !"});
});

// Only For Students 
router.get("/student", verifyToken, (req, res) => {
    res.json({message: "Welcome Student !"});
});

module.exports = router;
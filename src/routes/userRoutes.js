const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware")

const router = express.Router();

// Only For Teachers
router.get("/teacher", verifyToken, authorizeRoles("Teacher") ,(req, res) => {
    res.json({message: "Welcome Teacher !"});
});

// Both Teachers and Students 
router.get("/user", verifyToken, authorizeRoles("Teacher", "Student"), (req, res) => {
    res.json({message: "Welcome All !"});
});

// Only For Students 
router.get("/student", verifyToken, authorizeRoles("Student"), (req, res) => {
    res.json({message: "Welcome Student !"});
});

module.exports = router;
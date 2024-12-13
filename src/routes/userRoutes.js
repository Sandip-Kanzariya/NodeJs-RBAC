const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware")
const User = require("../models/userModel");

const router = express.Router();

// Only For Teachers
router.get("/teacher", verifyToken, authorizeRoles("Teacher") ,async (req, res) => {
    try {
        const students = await User.find({ role: "Student" }, { username: 1}); 

        res.json({
            message: "Welcome Teacher!",
            students: students, // Return the list of students
        });
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "An error occurred while fetching students." });
    }
});

// Both Teachers and Students 
router.get("/user", verifyToken, authorizeRoles("Teacher", "Student"), (req, res) => {
    res.json({message: "Welcome All !"});
});

// Only For Students 
router.get("/student", verifyToken, authorizeRoles("Student"), async (req, res) => {
    try {
        
        const teachers = await User.find({ role: "Teacher" }, { username: 1}); 

        res.json({
            message: "Welcome Student!",
            students: teachers, // Return the list of teachers
        });
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "An error occurred while fetching teachers." });
    }
});

module.exports = router;
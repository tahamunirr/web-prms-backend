// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/Education");

// Create Department
router.post("/Departementproject", EducationController.createEducation);

// Get All Departments
router.get("/Departementproject", EducationController.getAllEducation);

// Get Department by ID
router.get("/department/:id", EducationController.getEducationById);

// Update Department
router.put("/department/:id", EducationController.updateEducation);

// Delete Department
router.delete("/department/:id", EducationController.deleteEducation);

module.exports = router;

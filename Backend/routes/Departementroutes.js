// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const DepartmentController = require("../controllers/departement.js");

// Create Department
router.post("/Departementproject", DepartmentController.createDepartment);

// Get All Departments
router.get("/Departementproject", DepartmentController.getAllDepartments);

// Get Department by ID
router.get("/department/:id", DepartmentController.getDepartmentById);

// Update Department
router.put("/department/:id", DepartmentController.updateDepartment);

// Delete Department
router.delete("/department/:id", DepartmentController.deleteDepartment);

module.exports = router;

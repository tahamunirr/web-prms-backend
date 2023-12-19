// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const departmentController = require("../controllers/worklocation");

// Create Department
router.post("/worklocation", departmentController.createDepartment);

// Get All Departments
router.get("/worklocation", departmentController.getAllDepartments);

// Get Department by ID
router.get("/worklocation/:id", departmentController.getDepartmentById);

// Update Department
router.put("/worklocation/:id", departmentController.updateDepartment);

// Delete Department
router.delete("/worklocation/:id", departmentController.deleteDepartment);

module.exports = router;

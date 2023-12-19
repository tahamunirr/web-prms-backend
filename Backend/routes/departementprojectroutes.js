// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const DepartementprojectController = require("../controllers/Departementproject");

// Create Department
router.post(
  "/Departementproject",
  () => DepartementprojectController.createDepartementproject
);

// Get All Departments
router.get(
  "/Departementproject",
  () => DepartementprojectController.getAllDepartementproject
);

// Get Department by ID
router.get(
  "/Departementproject/:id",
  () => DepartementprojectController.getDepartementprojectById
);

// Update Department
router.put(
  "/Departementproject/:id",
  () => DepartementprojectController.updateDepartementproject
);

// Delete Department
router.delete(
  "/Departementproject/:id",
  () => DepartementprojectController.deleteDepartementproject
);

module.exports = router;

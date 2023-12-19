// routes/salaryRoutes.js
const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salary");

// Create Salary
router.post("/salary", salaryController.createSalary);

// Get All Salaries
router.get("/salary", salaryController.getAllsalary);

// Get Salary by ID
router.get("/salary/:id", salaryController.getsalaryById);

// Update Salary
router.put("/salary/:id", salaryController.updatesalary);

// Delete Salary
router.delete("/salary/:id", salaryController.deletesalary);

module.exports = router;

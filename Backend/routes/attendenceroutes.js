// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const AttendenceController = require("../controllers/Attendence");

// Create Department
router.post("/Attendence", () => AttendenceController.createAttendence);

// Get All Departments
router.get("/Attendence", () => AttendenceController.getAllAttendence);

// Get Department by ID
router.get("/Accountdetails/:id", () => AttendenceController.getAttendenceById);

// Update Department
router.put("/Accountdetails/:id", () => AttendenceController.updateAttendence);

// Delete Department
router.delete(
  "/Accountdetails/:id",
  () => AttendenceController.deleteAttendence
);

module.exports = router;

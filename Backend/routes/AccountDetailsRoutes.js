// routes/departmentRoutes.js
const express = require("express");
const router = express.Router();
const AccountdetailsController = require("../controllers/Accountdetails");

// // Create Department
// router.post("/Attendence", () => AccountdetailsController.createDepartment);

// // Get All Departments
// router.get("/Attendence", () => AccountdetailsController.getAllDepartments);

// Get Department by ID
router.get("/Accountdetails/:id", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.findByPk(req.params.id);
    if (Accountdetails) {
      res.json(Accountdetails);
    } else {
      res.status(404).json({ error: "Accountdetails not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// // Update Department
// router.put(
//   "/Accountdetails/:id",
//   () => AccountdetailsController.updateDepartment
// );

// // Delete Department
// router.delete(
//   "/Accountdetails/:id",
//   () => AccountdetailsController.deleteDepartment
// );

module.exports = router;

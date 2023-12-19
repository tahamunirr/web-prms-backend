const express = require("express");
const router = express.Router();
// const { Employee } = require("../models/AccountDetails"); // Adjust the path based on your file structure

// Create Employee
router.post("/Departementproject", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.create(req.body);
    res.json(Accountdetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Employees
router.get("/Departementproject", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.findAll();
    res.json(Accountdetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Accountdetails by ID
router.get("/leaves/:id", async (req, res) => {
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

// Update Accountdetails
router.put("/leaves/:id", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.findByPk(req.params.id);
    if (Accountdetails) {
      await Accountdetails.update(req.body);
      res.json(Accountdetails);
    } else {
      res.status(404).json({ error: "Accountdetails not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Accountdetails
router.delete("/leaves/:id", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.findByPk(req.params.id);
    if (Accountdetails) {
      await Accountdetails.destroy();
      res.json({ message: "Accountdetails deleted successfully" });
    } else {
      res.status(404).json({ error: "Accountdetails not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

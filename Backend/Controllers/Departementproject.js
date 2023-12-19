const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Departmentprojectschema"); // Adjust the path based on your file structure

// Create Employee
router.post("Departementproject", async (req, res) => {
  try {
    const Departementproject = await Departementproject.create(req.body);
    res.json(Departementproject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Departementproject
router.get("/Departementproject", async (req, res) => {
  try {
    const Departementproject = await Departementproject.findAll();
    res.json(Departementproject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Departementproject by ID
router.get("/Departementproject/:id", async (req, res) => {
  try {
    const Departementproject = await Departementproject.findByPk(req.params.id);
    if (Departementproject) {
      res.json(Departementproject);
    } else {
      res.status(404).json({ error: "Departementproject not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Departementproject
router.put("/Departementproject/:id", async (req, res) => {
  try {
    const Departementproject = await Departementproject.findByPk(req.params.id);
    if (Departementproject) {
      await Departementproject.update(req.body);
      res.json(Departementproject);
    } else {
      res.status(404).json({ error: "Departementproject not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Departementproject
router.delete("/Departementproject/:id", async (req, res) => {
  try {
    const Departementproject = await Departementproject.findByPk(req.params.id);
    if (Departementproject) {
      await Departementproject.destroy();
      res.json({ message: "Departementproject deleted successfully" });
    } else {
      res.status(404).json({ error: "Departementproject not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

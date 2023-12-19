const express = require("express");
const router = express.Router();
const { Employee } = require("../models/attendenceschema"); // Adjust the path based on your file structure

// Create Employee
router.post("attendence", async (req, res) => {
  try {
    const attendence = await attendence.create(req.body);
    res.json(attendence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All attendence
router.get("/attendence", async (req, res) => {
  try {
    const attendence = await attendence.findAll();
    res.json(attendence);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get attendence by ID
router.get("/attendence/:id", async (req, res) => {
  try {
    const attendence = await attendence.findByPk(req.params.id);
    if (attendence) {
      res.json(attendence);
    } else {
      res.status(404).json({ error: "attendence not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update attendence
router.put("/attendence/:id", async (req, res) => {
  try {
    const attendence = await attendence.findByPk(req.params.id);
    if (attendence) {
      await attendence.update(req.body);
      res.json(attendence);
    } else {
      res.status(404).json({ error: "attendence not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete attendence
router.delete("/attendence/:id", async (req, res) => {
  try {
    const attendence = await attendence.findByPk(req.params.id);
    if (attendence) {
      await attendence.destroy();
      res.json({ message: "attendence deleted successfully" });
    } else {
      res.status(404).json({ error: "attendence not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

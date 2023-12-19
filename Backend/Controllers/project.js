const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Projectschema"); // Adjust the path based on your file structure

// Create project
router.post("/salary", async (req, res) => {
  try {
    const project = await project.create(req.body);
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All project
router.get("/salary", async (req, res) => {
  try {
    const project = await project.findAll();
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get project by ID
router.get("/project/:id", async (req, res) => {
  try {
    const project = await project.findByPk(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: "project not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update project
router.put("/project/:id", async (req, res) => {
  try {
    const project = await project.findByPk(req.params.id);
    if (project) {
      await project.update(req.body);
      res.json(project);
    } else {
      res.status(404).json({ error: "project not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete project
router.delete("/project/:id", async (req, res) => {
  try {
    const project = await project.findByPk(req.params.id);
    if (project) {
      await project.destroy();
      res.json({ message: "project deleted successfully" });
    } else {
      res.status(404).json({ error: "Accountdetails not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

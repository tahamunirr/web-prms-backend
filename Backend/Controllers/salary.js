const express = require("express");
const router = express.Router();
const { Employee } = require("../models/SalarySchema"); // Adjust the path based on your file structure

// Create salary
router.post("/salary", async (req, res) => {
  try {
    const salary = await salary.create(req.body);
    res.json(salary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All salary
router.get("/salary", async (req, res) => {
  try {
    const salary = await salary.findAll();
    res.json(salary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get salary by ID
router.get("/salary/:id", async (req, res) => {
  try {
    const salary = await salary.findByPk(req.params.id);
    if (salary) {
      res.json(salary);
    } else {
      res.status(404).json({ error: "project not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update salary
router.put("/salary/:id", async (req, res) => {
  try {
    const salary = await salary.findByPk(req.params.id);
    if (salary) {
      await salary.update(req.body);
      res.json(salary);
    } else {
      res.status(404).json({ error: "salary not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete salary
router.delete("/salary/:id", async (req, res) => {
  try {
    const salary = await salary.findByPk(req.params.id);
    if (salary) {
      await salary.destroy();
      res.json({ message: "salary deleted successfully" });
    } else {
      res.status(404).json({ error: "salary not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

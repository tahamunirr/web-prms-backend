const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Departmentschema"); // Adjust the path based on your file structure

// Create Employee
router.post("/departement", async (req, res) => {
  try {
    const department = await department.create(req.body);
    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Employees
router.get("/departement", async (req, res) => {
  try {
    const departement = await department.findAll();
    res.json(departement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Employee by ID
router.get("/department/:id", async (req, res) => {
  try {
    const department = await department.findByPk(req.params.id);
    if (department) {
      res.json(department);
    } else {
      res.status(404).json({ error: "department not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Employee
router.put("/department/:id", async (req, res) => {
  try {
    const department = await department.findByPk(req.params.id);
    if (department) {
      await department.update(req.body);
      res.json(department);
    } else {
      res.status(404).json({ error: "department not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Employee
router.delete("/department/:id", async (req, res) => {
  try {
    const department = await department.findByPk(req.params.id);
    if (department) {
      await department.destroy();
      res.json({ message: "department deleted successfully" });
    } else {
      res.status(404).json({ error: "department not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

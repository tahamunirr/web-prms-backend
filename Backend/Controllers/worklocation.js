const express = require("express");
const router = express.Router();
const { Employee } = require("../models/worklocationschema"); // Adjust the path based on your file structure

// Create worklocation
router.post("/worklocation", async (req, res) => {
  try {
    const worklocation = await worklocation.create(req.body);
    res.json(worklocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All worklocation
router.get("/worklocation", async (req, res) => {
  try {
    const worklocation = await worklocation.findAll();
    res.json(worklocation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get worklocation by ID
router.get("/worklocation/:id", async (req, res) => {
  try {
    const worklocation = await worklocation.findByPk(req.params.id);
    if (worklocation) {
      res.json(worklocation);
    } else {
      res.status(404).json({ error: "worklocation not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update worklocation
router.put("/worklocation/:id", async (req, res) => {
  try {
    const worklocation = await worklocation.findByPk(req.params.id);
    if (worklocation) {
      await worklocation.update(req.body);
      res.json(worklocation);
    } else {
      res.status(404).json({ error: "worklocation not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete worklocation
router.delete("/worklocation/:id", async (req, res) => {
  try {
    const worklocation = await worklocation.findByPk(req.params.id);
    if (worklocation) {
      await worklocation.destroy();
      res.json({ message: "worklocation deleted successfully" });
    } else {
      res.status(404).json({ error: "worklocation not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

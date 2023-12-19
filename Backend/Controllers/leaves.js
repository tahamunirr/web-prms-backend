const express = require("express");
const router = express.Router();
const { Employee } = require("../models/leaveschema"); // Adjust the path based on your file structure

// Create leaves
router.post("/leaves", async (req, res) => {
  try {
    const leaves = await leaves.create(req.body);
    res.json(leaves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All leaves
router.get("/leaves", async (req, res) => {
  try {
    const leaves = await leaves.findAll();
    res.json(leaves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get leaves by ID
router.get("/leaves/:id", async (req, res) => {
  try {
    const leaves = await leaves.findByPk(req.params.id);
    if (leaves) {
      res.json(leaves);
    } else {
      res.status(404).json({ error: "leaves not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update leaves
router.put("/leaves/:id", async (req, res) => {
  try {
    const leaves = await leaves.findByPk(req.params.id);
    if (leaves) {
      await leaves.update(req.body);
      res.json(leaves);
    } else {
      res.status(404).json({ error: "leaves not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete leaves
router.delete("/leaves/:id", async (req, res) => {
  try {
    const leaves = await leaves.findByPk(req.params.id);
    if (leaves) {
      await leaves.destroy();
      res.json({ message: "leaves deleted successfully" });
    } else {
      res.status(404).json({ error: "leaves not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

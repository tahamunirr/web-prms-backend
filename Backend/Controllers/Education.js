const express = require("express");
const router = express.Router();
const { Employee } = require("../models/Educationschema"); // Adjust the path based on your file structure

// Create Education
router.post("/Departementproject", async (req, res) => {
  try {
    const Accountdetails = await Accountdetails.create(req.body);
    res.json(Accountdetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get All Education
router.get("/Departementproject", async (req, res) => {
  try {
    const Education = await Education.findAll();
    res.json(Education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Education by ID
router.get("/leaves/:id", async (req, res) => {
  try {
    const Education = await Education.findByPk(req.params.id);
    if (Education) {
      res.json(Education);
    } else {
      res.status(404).json({ error: "Education not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update Education
router.put("/leaves/:id", async (req, res) => {
  try {
    const Education = await Education.findByPk(req.params.id);
    if (Education) {
      await Education.update(req.body);
      res.json(Education);
    } else {
      res.status(404).json({ error: "Education not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete Education
router.delete("/leaves/:id", async (req, res) => {
  try {
    const Education = await Education.findByPk(req.params.id);
    if (Education) {
      await Education.destroy();
      res.json({ message: "Accountdetails deleted successfully" });
    } else {
      res.status(404).json({ error: "Education not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

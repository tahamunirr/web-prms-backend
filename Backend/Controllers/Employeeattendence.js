const express = require("express");
const router = express.Router();
const { Employeeattendence } = require("../models/attendenceschema");

router.get("/", async (req, res) => {
  try {
    const Employeeattendence = await Employeeattendence.find();
    res.json(Employeeattendence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getEmployeattendence, (req, res) => {
  res.json(res.Employeeattendence);
});

router.post("/Employeeattendence", async (req, res) => {
  const Employeeattendence = new Employeeattendence(req.body);
  try {
    const newattendence = await Employeeattendence.save();
    res.status(201).json(newattendence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch(
  "/Employeeattendence/:id",
  getEmployeeattendence,
  async (req, res) => {
    if (req.body.name != null) {
      res.Employeeattendence.name = req.body.name;
    }
    if (req.body.address != null) {
      res.Employeeattendence.address = req.body.address;
    }
    if (req.body.contactDetails != null) {
      res.Employeeattendence.contactDetails = req.body.contactDetails;
    }
    try {
      const updateEmployeeattendence = await res.Employeeattendence.save();
      res.json(updatedEmployeeattendence);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

router.delete(
  "/Employeeattendence/:id",
  getEmployeeattendence,
  async (req, res) => {
    try {
      await res.Employeeattendence.remove();
      res.json({ message: "Employeeattendence deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

async function getEmployeeattendence(req, res, next) {
  try {
    const Employeeattendence = await Employeeattendence.findById(req.params.id);
    if (!Employeeattendence) {
      return res.status(404).json({ message: "Employeeattendence not found" });
    }
    res.Employeeattendence = Employeeattendence;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;

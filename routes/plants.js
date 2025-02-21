import express from "express";
import Plant from "../models/plant.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const plants = await Plant.findAll();
    res.status(200).json(plants);
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.status(200).json(plant);
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

router.post("/", async (req, res) => {
  const {name, perennial, category, price} = req.body;
  try {
    if (!name || !`${perennial}` || !category || !price) {
      return res.status(403).json({message: 'Missing data'})
    }
    const result = await Plant.create({name, perennial, category, price})
    if (!result) {
      return res.status(500).json({message: 'Database error'})
    }
    res.status(201).json({message: 'Plant created'})
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    plant.destroy();
    res.status(200).json({ message: "Plant deleted" });
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);
    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    plant.destroy();
    res.status(200).json({ message: "Plant deleted" });
  } catch (err) {
    res.status(500).json({ message: `Server error: ${err.message}` });
  }
});

export default router;

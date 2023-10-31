import express from "express";
import mongoose from "mongoose";
import RecipeModel from "../models/Recipes.js";
import UserModel from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await RecipeModel.find({});
    res.json(recipes);
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const recipes = new RecipeModel(req.body);
  try {
    const result = await recipes.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeModel.findOne({ _id: id });
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as recipesRouter };

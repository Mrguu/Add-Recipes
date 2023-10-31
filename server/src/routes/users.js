import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/Users.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const savedRecipesId = req.body.savedRecipesId;
  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(409).send("User already exists");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    email,
    password: hashPassword,
    savedRecipes: savedRecipesId,
  });
  await newUser.save();
  res.status(201).send("User has been created");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign({ id: user._id }, process.env.SECRET);
        res.json({ token, userID: user._id });
      } else {
        res.status(401).json({ error: "Wrong credentials!" });
      }
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { router as userRouter };

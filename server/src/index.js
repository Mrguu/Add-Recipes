import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGOOSE_URL);

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

app.listen(5000, () => console.log("Server is running!"));

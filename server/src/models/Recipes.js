import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    Recipename: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: { type: String, required: true },
    image_url: { type: String, required: true },
    cookingTime: {
      type: Number,
      required: true,
    },
    userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model("Recipes", RecipeSchema);

export default RecipeModel;

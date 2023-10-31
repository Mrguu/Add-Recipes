import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Add = () => {
  const getUserID = () => {
    return window.localStorage.getItem("userID");
  };
  const navigate = useNavigate();
  const userID = getUserID();
  const [recipe, setRecipe] = useState({
    Recipename: "",
    ingredients: "",
    instructions: "",
    image_url: "",
    cookingTime: 0,
    userOwner: userID,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/recipes", recipe);
      alert("Successfully added a new Recipe!");
      navigate("/recipes");
    } catch (err) {
      console.log(err);
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    };
    loadpage();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col w-100 h-full bg-[#1E221E] px-0 py-5 md:p-10 items-center gap-10">
      <h1 className="text-green-500 font-bold text-2xl md:text-3xl">
        Add Your Recipes
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-slate-800 w-11/12 sm:w-[500px] md:w-[500px] h-full rounded-2xl p-3 md:p-5">
        <input
          onChange={handleChange}
          name="Recipename"
          className="p-2 md:p-3 rounded-xl bg-slate-600 outline-none text-white"
          type="text"
          placeholder="Recipes'name"
        />
        <textarea
          onChange={handleChange}
          name="ingredients"
          className="p-2 md:p-3 rounded-xl bg-slate-600 outline-none text-white"
          placeholder="Ingredients"
          cols="10"
          rows="5"></textarea>
        <textarea
          onChange={handleChange}
          name="instructions"
          className="p-2 md:p-3 rounded-xl bg-slate-600 outline-none text-white"
          placeholder="Instructions"
          cols="10"
          rows="5"></textarea>
        <input
          onChange={handleChange}
          name="image_url"
          className="p-2 md:p-3 rounded-xl bg-slate-600 outline-none text-white"
          type="text"
          placeholder="Recipes'image_url"
        />
        <input
          onChange={handleChange}
          name="cookingTime"
          className="p-2 md:p-3 rounded-xl bg-slate-600 outline-none text-white"
          type="number"
          placeholder="Cooking Time"
        />
        <button className="bg-green-700 font-bold text-green-100 text-xl md:text-2xl p-2 md:p-3 rounded-xl">
          Add Recipes
        </button>
      </form>
    </div>
  );
};

export default Add;

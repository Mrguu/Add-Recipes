import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Recipes = ({ match }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/recipes");
        setRecipes(result.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (!recipes) {
    return <Loader />;
  }
  return (
    <div className="bg-[#1E221E] w-full h-full flex flex-col gap-10 items-center p-3 md:p-10">
      <h1 className="text-3xl text-green-500 font-bold">Recipes</h1>
      {recipes.map((recipe) => {
        return (
          <Link
            to={`/recipes/${recipe._id}`}
            key={recipe._id}
            className="flex flex-col w-full md:w-1/2 h-auto rounded-xl overflow-hidden bg-green-100">
            <img src={recipe.image_url} alt={recipe.Recipename} />
            <div className="flex flex-col gap-4 p-5">
              <h1 className="text-xl font-bold">{recipe.Recipename}</h1>
              <p className="text-xs md:text-base">{recipe.instructions}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;

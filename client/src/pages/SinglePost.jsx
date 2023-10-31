import React, { useEffect, useState } from "react";
import axios from "axios";
import instruction from "../img/instruction.png";
import time from "../img/time.png";
import Ingredients from "../img/Ingredients.png";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const SinglePost = ({ match }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipe(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  if (!recipe) {
    return <Loader />;
  }

  return (
    <div className="bg-[#1E221E] w-full h-full flex flex-col gap-10 items-center p-5 md:p-10">
      <div>
        <img src={recipe.image_url} alt={recipe.Recipename} />
      </div>
      <div className=" flex flex-col gap-10 w-full md:w-5/6">
        <h1 className="text-2xl font-bold text-green-500 text-center">
          {recipe.Recipename}
        </h1>
        <div className="flex md:flex-row flex-col gap-10 items-center text-green-200">
          <span className="w-7 h-7 flex items-center gap-5 w-1/2">
            <img src={Ingredients} alt="" />
            <span className="hidden md:block">:</span>
          </span>
          <p className="text-xs md:text-sm text-center md:text-start">
            {recipe.ingredients}
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-10 items-center text-green-200">
          <span className="w-7 h-7 flex items-center gap-5 w-1/2">
            <img src={instruction} alt="" />
            <span className="hidden md:block">:</span>
          </span>
          <p className="text-xs md:text-sm text-center md:text-start">
            {recipe.instructions}
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-10 items-center text-green-200">
          <span className="w-7 h-7 flex items-center gap-5 w-1/2">
            <img src={time} alt="" />
            <span className="hidden md:block">:</span>
          </span>
          <p className="text-xs md:text-sm text-center md:text-start">
            {recipe.cookingTime} minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

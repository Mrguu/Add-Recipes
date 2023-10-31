import React, { useEffect, useState } from "react";
import home from "../img/home.jpg";
import item1 from "../img/item1.jpg";
import item2 from "../img/item2.jpg";
import item3 from "../img/item3.jpg";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadpage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    loadpage();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="w-full h-full bg-[#1E221E] p-5">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-5 md:p-10 gap-10">
        <h1 className="font-bold text-2xl md:text-4xl text-center text-green-400 w-full md:w-1/2">
          Cook up a storm, add your favorite recipes, and savor the flavor of
          home-cooked delights!
        </h1>
        <img className="w-full md:w-1/3 rounded-full" src={home} alt="" />
      </div>
      <div className="flex gap-10 items-center justify-center rounded-xl p-5 bg-green-400">
        <img className="w-1/4 md:w-1/5 rounded-xl" src={item1} alt="" />
        <img className="w-1/4 md:w-1/5 rounded-xl" src={item2} alt="" />
        <img className="w-1/4 md:w-1/5 rounded-xl" src={item3} alt="" />
      </div>
    </div>
  );
};

export default Home;

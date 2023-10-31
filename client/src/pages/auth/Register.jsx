import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/auth/register`, {
        username,
        email,
        password,
      });
      alert("Registion Complete!");
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-full p-1 py-10 md:p-10 flex flex-col gap-3 items-center justify-center bg-[#1E221E]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 bg-slate-600 w-11/12 md:w-[400px] py-5 items-center rounded-xl ">
        <h1 className="font-bold text-4xl text-gray-400">Register</h1>
        <input
          className="px-3 py-2 w-11/12 md:w-[300px] rounded-2xl bg-slate-500 text-white placeholder-white outline-none"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />
        <input
          className="px-3 py-2 w-11/12 md:w-[300px] rounded-2xl bg-slate-500 text-white placeholder-white outline-none"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <input
          className="px-3 py-2 w-11/12 md:w-[300px] rounded-2xl bg-slate-500 text-white placeholder-white outline-none"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button
          type="submit"
          className="bg-slate-300 w-11/12 p-4 text-2xl font-bold rounded-xl hover:bg-slate-400">
          Register
        </button>
        {error && (
          <div className="text-red-500 text-xs md:text-sm text-center">
            {error}
          </div>
        )}
      </form>
      <span className="text-xs font-bold text-slate-200">
        Already have a account!
        <Link to="/auth/login" className=" text-blue-900">
          Login
        </Link>
      </span>
    </div>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookie] = useCookies(["access_token"]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      setCookie("access_token", res.data.token);
      window.localStorage.setItem("userID", res.data.userID);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("invalid username or password! Please try again.");
    }
  };
  return (
    <div className="w-full h-full p-1 py-10 md:p-10 flex flex-col gap-3 items-center justify-center bg-[#1E221E]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 bg-slate-600 w-11/12 sm:w-[400px] py-5 items-center rounded-xl">
        <h1 className="font-bold text-4xl text-gray-400">Login</h1>
        <input
          className="px-3 py-2 w-5/6 md:w-[300px] rounded-2xl bg-slate-500 text-white placeholder-white outline-none"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="px-3 py-2 w-5/6 md:w-[300px] rounded-2xl bg-slate-500 text-white placeholder-white outline-none"
          type="password"
          placeholder="password"
        />
        <button
          type="submit"
          className="bg-slate-300 w-11/12 p-4 text-2xl font-bold rounded-xl hover:bg-slate-400">
          Login
        </button>
        {error && (
          <div className="text-red-500 text-xs md:text-sm text-center">
            {error}
          </div>
        )}
      </form>
      <div className="flex flex-col gap-5 bg-slate-600 w-11/12 md:w-[400px] items-center py-3 rounded-xl p-1 md:p-5">
        <h1 className="font-bold text-gray-400">
          You can also try with this account
        </h1>
        <div className="flex gap-5 text-sm font-bold text-white">
          <span>username</span>
          <span>:</span>
          <span>Demo</span>
        </div>
        <div className="flex gap-5 text-sm font-bold text-white">
          <span>password</span>
          <span>:</span>
          <span>123456</span>
        </div>
      </div>
      <span className="text-xs font-bold text-slate-200">
        Don't have a account!
        <Link to="/auth/register" className=" text-blue-900">
          Register
        </Link>
      </span>
    </div>
  );
};

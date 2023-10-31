import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import Recipes from "./pages/Recipes";
import Add from "./pages/Add";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/recipes/:id" element={<SinglePost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

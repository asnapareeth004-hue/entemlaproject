import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Trending from "../components/home/Trending";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Trending />
      <button onClick={() =>  navigate("/role")}>
        Login / Get Started
      </button>
    </div>
  );
};

export default Home;
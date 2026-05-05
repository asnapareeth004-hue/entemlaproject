import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Trending from "../components/home/Trending";

const Home = ({setPage}) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Trending />
      <button onClick={() => setPage("auth")}>
        Login / Get Started
      </button>
    </div>
  );
};

export default Home;
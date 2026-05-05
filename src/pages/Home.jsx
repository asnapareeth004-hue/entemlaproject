import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Trending from "../components/home/Trending";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Trending />
      <Footer/>
    </div>
  );
};

export default Home;
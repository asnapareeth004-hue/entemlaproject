import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Trending from "../components/home/Trending";
import Footer from "../components/home/Footer";

const Home = ({setPage}) => {
  return (
    <div>
      <Navbar setPage={setPage}/>
      <Hero />
      <Stats />
      <Trending />
      <Footer/>
      <button onClick={() => setPage("auth")}>
        Login / Get Started
      </button>
    </div>
  );
};

export default Home;
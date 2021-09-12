import React from "react";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Layer from "../Components/Layer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Hero />
      <Layer />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;

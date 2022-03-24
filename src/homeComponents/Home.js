import React from "react";
import Specialities from "./Specialities";
import Display from "./Display";
import Footer from "../utils/Footer";
import Header from "./Header";
import InstagramSection from "./InstagramSection";
import Nav from "../utils/Nav";
import Showcase from "./Showcase";
import Trending from "./Trending";
import MoreItems from "../utils/MoreItems";
import "../homeCSS/Home.css";


const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Display />
      <Trending />
      <Specialities />
      <div className="home__moreItemsSection">
      <h1>More Items</h1>
      <MoreItems />
      </div>
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;

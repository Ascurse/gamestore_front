import React from "react";
import MyCarousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar";
import NewsList from "../../components/news/newslist/NewsList";
import "./Newspage.css";

const Newspage = () => {
  return (
    <div>
      <MyCarousel />
      <div className="newspage">
        <Navbar />
        <NewsList />
      </div>
    </div>
  );
};

export default Newspage;

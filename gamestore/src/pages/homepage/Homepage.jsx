import { Menu } from "antd";
import React from "react";
import MyCarousel from "../../components/carousel/Carousel";
import GameList from "../../components/games/gamelist/GameList";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="page-content">
      <MyCarousel />
      <div className="main_content">
        <GameList />
      </div>
    </div>
  );
};

export default Homepage;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Categories from "../../categories/Categories";
import GameCard from "../gamecard/GameCard";
import { motion } from "framer-motion";
import "./GameList.css";

const GameList = () => {
  const axios = require("axios").default;
  const category = useSelector((state) => state.category.currentCategory);
  const [games, setGames] = useState([]);
  const [filtered, setFiltered] = useState(games);

  const filterGames = () => {
    if (!category || category.name === "All") {
      setFiltered([...games]);
    } else {
      setFiltered(
        [...games].filter((item) =>
          item.genre
            .map((genre) => genre.slug)
            .find((item) => item === category.slug)
        )
      );
    }
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/games/").then(function (response) {
      setGames(response.data);
      setFiltered(response.data);
    });
  }, []);

  useEffect(() => {
    filterGames();
  }, [category]);

  return (
    <div className="gamelist-content">
      <Categories />
      <div className="gamelist">
        {filtered.length > 0 ? (
          filtered.map((game) => <GameCard game={game} key={game.id}/>)
        ) : (
          <h1 style={{ color: "white" }}>No games in this category :C</h1>
        )}
      </div>
    </div>
  );
};

export default GameList;

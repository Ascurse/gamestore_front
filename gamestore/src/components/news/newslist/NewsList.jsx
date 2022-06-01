import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "../newsitem/NewsItem";
import "./NewsList.css";

const NewsList = () => {
  const axios = require("axios").default;
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/news/").then(function (response) {
      setNews(response.data);
    });
  }, []);

  return (
    <div className="newslist">
      {news.length > 0 ? (
        news.map((item) => <NewsItem item={item} key={item.id} />)
      ) : (
        <h1 style={{ color: "white" }}>Sorry, no news :C</h1>
      )}
    </div>
  );
};

export default NewsList;

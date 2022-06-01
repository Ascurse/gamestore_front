import React from "react";
import "./NewsItem.css";
import Moment from "react-moment";

const NewsItem = ({ item }) => {
  return (
    <div className="newsitem">
      <h2 className="news-title">{item.title}</h2>
      <div className="news-time">
        <Moment format="HH:mm DD-MM-YY">{item.created_at}</Moment>
      </div>
      <div className="img-post">
        <div
          className="news-image"
          style={{ backgroundImage: `url(${item.post_image})` }}
        />
        <article className="news-post">{item.post}</article>
      </div>
    </div>
  );
};

export default NewsItem;

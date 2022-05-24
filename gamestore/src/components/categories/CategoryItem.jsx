import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CategoryItem.css";
import { setCurrentCategory } from "../../redux/filter/reducer";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentCategory(category));
  };
  const categoryitem = useSelector((state) => state.category.currentCategory);

  return (
    <button
      className="categoryitem"
      style={{
        color: category.color,
        borderColor: category.color,
      }}
      onClick={handleClick}
    >
      {category.name}
    </button>
  );
};

export default CategoryItem;

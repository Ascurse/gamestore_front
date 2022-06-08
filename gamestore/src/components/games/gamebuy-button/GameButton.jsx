import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { addItemInCart, deleteItemFromCart } from "../../../redux/cart/reducer";
import './Gamebutton.css'

const GameButton = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(addItemInCart(game));
    }
  };

  return (
    <div className="game__button">
      <Button type={isItemInCart ? "secondary" : "primary"} onClick={handleClick}>
        {isItemInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default GameButton;

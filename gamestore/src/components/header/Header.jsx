import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Popover } from "antd";
import { CartItem } from "../cart-item/CartItem";
import { Button } from "antd";
import GamerHub from './assets/GamerHUB.png'
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => (acc += game.price), 0);

  const content = (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.name}
                id={game.id}
              />
            ))
          : "Your cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total sum:</span>
            <span>{totalPrice} $</span>
          </div>
          <Button type="primary" size="m">
            Checkout
          </Button>
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="header">
      <div className="header__left">
        <Navbar />
      </div>
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo" src={GamerHub} />
        </Link>
      </div>
      <div className="header__cart">
        <Popover content={content}>
          <Badge count={items.length}>
            <ShoppingCartOutlined
              style={{ fontSize: "30px", color: "#FFFFFF" }}
            />
          </Badge>
        </Popover>
        <h2 className="header__total">Total sum: {totalPrice}$</h2>
      </div>
    </div>
  );
};

export default Header;

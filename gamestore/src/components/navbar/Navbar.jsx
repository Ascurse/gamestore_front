import React from "react";
import { Menu } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Menu theme="dark" style={{ width: 256, fontSize: 20 }}>
        <Menu.Item>
          <Link to={"/news"}>News</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={"/"}>Game Store</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;

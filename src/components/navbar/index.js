import React, { memo } from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
// Local
import "./style.scss";

// Components
import Avatar from "../avatar";
import Iconconfig from "../configicon";
function Navbar() {
  return (
    <nav className="monkeys-nav">
        <div className="logo-container">
          <span className="logo-partone">MONKEY'S</span>
          <span className="logo-parttwo">CLOUD</span>
        </div>       
          <div className="navbar-icons">
            <FaSearch className="nav-icon" />
            <Iconconfig className="nav-icon"/>
            <FaBell className="nav-icon" />
            <Avatar className="nav-avatar" />
          </div>
    </nav>
  );
}

export default memo(Navbar);

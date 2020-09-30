import React, { memo } from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
// Local
import "./style.scss";

// Components
import Avatar from "../avatar";

function Navbar() {
  return (
    <nav className="monkeys-nav">
      <div className="monkeys-nav-container">
        <div className="logo-container">
          <span className="logo-partone">MONKEY'S</span>
          <span className="logo-parttwo">CLOUD</span>
        </div>

        <div className="avatar-container">
          <div className="p-1">
            <FaSearch className="pointer text-secondary" />
          </div>
          <div className="p-1">
            <FaCog className="pointer text-secondary" />
          </div>
          <div className="p-1">
            <FaBell className="pointer text-secondary" />
          </div>
          <div className="ml-2 d-flex align-items-center justify-content-center">
            <Avatar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

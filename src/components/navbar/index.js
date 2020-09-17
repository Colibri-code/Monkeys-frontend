import React, { memo } from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";

// Local
import "./style.scss";

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
            <div className="avatar-icon-container">
              <span className="avatar-icon"></span>
              <span className="avatar-status"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

import React, { memo } from "react";
import { FaBell, FaCog, FaSearch } from "react-icons/fa";
// Local
import "./style.scss";

// Components
import Avatar from "../avatar";
import SearchFilter from './SearchFilter'

function Navbar() {

  const sampleData = [
    { id: 1, first_name: 'Aron', last_name: 'Paisley', gender: 'male' },
    { id: 1, first_name: 'Nerissa', last_name: 'Millhouse', gender: 'female' },
    { id: 1, first_name: 'Michael', last_name: 'Schank', gender: 'male' },
    { id: 1, first_name: 'Velma', last_name: 'Laiche', gender: 'female' }
  ];

  return (
    <nav className="monkeys-nav">
        <div className="logo-container">
          <span className="logo-partone">MONKEY'S</span>
          <span className="logo-parttwo">CLOUD</span>
        </div>    
        <SearchFilter />
          <div className="navbar-icons">
            <FaSearch className="nav-icon" />
            <FaCog  className="nav-icon"/>
            <FaBell className="nav-icon" />
            <Avatar className="nav-avatar" />
          </div>
    </nav>
  );
}

export default memo(Navbar);

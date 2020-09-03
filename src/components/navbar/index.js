import React, { memo } from 'react';
import { FaBell, FaCog, FaSearch } from 'react-icons/fa';

// Local
import './style.scss';

function Navbar(props) {
  return (
    <nav className='monkeys-nav'>
      <div className='monkeys-nav-container'>
        <div className='logo-container'>
          <span className='logo-partone'>MONKEY'S</span>
          <span className='logo-parttwo'>CLOUD</span>
        </div>

        <div className='avatar-container'>
          <div className='p-1'>
            <FaSearch className='pointer text-secondary' />
          </div>
          <div className='p-1'>
            <FaCog className='pointer text-secondary' />
          </div>
          <div className='p-1'>
            <FaBell className='pointer text-secondary' />
          </div>
          <div className='ml-2 d-flex align-items-center justify-content-center'>
            <div className='position-relative avatar-icon-container'>
              <span className='position-absolute avatar-icon'></span>
              <span className='position-absolute avatar-status'></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

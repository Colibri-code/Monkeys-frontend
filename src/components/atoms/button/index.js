import React from 'react';
import './style.scss';

const Button = ({ title, ...rest }) => (
  <button className='main-button' {...rest}>
    {title}
  </button>
);

export default Button;

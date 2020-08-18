import React from 'react';
import './style.scss';

const Button = ({ title, ...rest }) => (
  <button className='main-button pointer' type='submit' {...rest}>
    {title}
  </button>
);

export default Button;

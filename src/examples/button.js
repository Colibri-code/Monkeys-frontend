import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Button = ({ name }) => {
  return <button className='btn btn-primary'>{name}</button>;
};

export default Button;

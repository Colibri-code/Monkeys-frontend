import React from 'react';

import './style.scss';

const ErrorMessage = ({ message }) => (
  <div className='alert-danger'>{message}</div>
);

export default ErrorMessage;

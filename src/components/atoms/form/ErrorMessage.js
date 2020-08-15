import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: red;
  margin: 5px 0;
  font-size: 16px;
`;

const ErrorMessage = ({ error }) => <Error>{error}</Error>;

export default ErrorMessage;

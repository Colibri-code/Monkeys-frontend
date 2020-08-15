import React from 'react';
import colors from '../../base/colors';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${colors.secondaryBlue};
  border: none;
  color: white;
  height: 50px;
  width: 100%;
  margin: 15px 0;
  font-size: 17px;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ title, ...rest }) => (
  <StyledButton {...rest}>{title}</StyledButton>
);

export default Button;

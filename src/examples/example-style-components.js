import React from 'react';
import styled from 'styled-components'; // "styled-components": "^5.1.1"

// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  border: 2px solid palevioletred;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Card = () => {
    return (
        <div>
          <Button className="btn">Normal Button</Button>
          <TomatoButton>Tomato Button</TomatoButton>
        </div>
      );
    }
    
export default Card;

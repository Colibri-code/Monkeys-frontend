import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: center;
  margin: ${props => props.margin};
`;

export default Image;

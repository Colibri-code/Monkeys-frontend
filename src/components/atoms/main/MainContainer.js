import styled from 'styled-components';
import { breakpoint, size } from '../../base/breakpoints';

const MainContainer = styled.div`
  max-width: 1440px;
  width: 95%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: ${props => props.flexDireccion};
  background-color: #ffffff;
  ${breakpoint(size.tablet)`
    width:90%;
  `}
`;

export default MainContainer;

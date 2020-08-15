import styled from 'styled-components';
import { breakpoint, size } from '../../base/breakpoints';

const Content = styled.div`
  width: 320px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint(size.tablet)`
    width:450px;
  `}
  ${breakpoint(size.mobile)`
    width:100%;
  `}
`;

export default Content;

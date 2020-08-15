import styled from 'styled-components';
import { breakpoint, size } from '../../base/breakpoints';

const MainContent = styled.div`
  border-radius: 1px;
  border: solid 1px rgba(46, 91, 255, 0.08);
  width: 675px;
  ${breakpoint(size.laptop)`
    width:500px;
 `}
  ${breakpoint(size.tablet)`
    width:100%;
 `}
`;

export default MainContent;

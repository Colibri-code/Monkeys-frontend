import colors from '../../base/colors';
import Image from '../../../assets/images/pexels.jpg';
import styled from 'styled-components';
import { breakpoint, size } from '../../base/breakpoints';

const ImageBackground = styled.div`
  flex: 1;
  mix-blend-mode: multiply;
  background-color: ${colors.whiteBackground};
  background-image: url(${Image});
  background-size: cover;
  ${breakpoint(size.tablet)`
  display:none;
 `}
`;

export default ImageBackground;

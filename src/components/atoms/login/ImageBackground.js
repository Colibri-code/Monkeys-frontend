import Image from '../../../assets/images/pexels.jpg';
import styled from 'styled-components';

const ImageBackground = styled.div`
  flex: 1;
  mix-blend-mode: multiply;
  background-color: whiteBackground;
  background-image: url(${Image});
  background-size: cover;
`;

export default ImageBackground;

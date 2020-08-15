import styled from 'styled-components';

const Subtitle = styled.h3`
  text-align: ${({ align }) => align};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: ${({ color }) => color || 'black'};
`;

export default Subtitle;

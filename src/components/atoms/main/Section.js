import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '10px 0'};
  padding: ${({ padding }) => padding || '10px 0'};
`;

export default Section;

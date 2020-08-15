import styled from 'styled-components';
import colors from '../../base/colors';

const PasswordLabel = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px !important;
  a {
    flex: 1;
    text-align: end;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: ${colors.secondaryGray};
  }
`;

export default PasswordLabel;

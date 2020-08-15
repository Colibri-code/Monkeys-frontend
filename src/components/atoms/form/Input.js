import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 41px;
  border-radius: 5px;
  border: ${({ border }) => (!border ? 'solid 1px #e0e7ff' : 'solid 1px red')};
  background-color: rgba(224, 231, 255, 0.2);
  padding-left: 16px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e384d;
`;

export default Input;

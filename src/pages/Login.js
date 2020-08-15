import React from 'react';

import CardBase from '../components/organisms/CardBase';
import MainContainer from '../components/atoms/main/MainContainer';
import { ImageBackground } from '../components/atoms/login';

const Login = () => (
  <MainContainer flexDireccion='row'>
    <CardBase />
    <ImageBackground />
  </MainContainer>
);

export default Login;

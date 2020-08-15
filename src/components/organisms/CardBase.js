import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../base/colors';
import { Title, Subtitle } from '../atoms/typography';
import { Image } from '../atoms/main';
import { MainContent, Content } from '../atoms/login';
import Monkey from '../../assets/logo/monkey.png';
import Logo from '../../assets/logo/logo.png';
import Google from '../../assets/logo/logo-google.png';
import LoginForm from '../molecules/login/LoginForm';
import ImageContainer from '../molecules/Main/ImageContainer';

const CardBase = () => {
  return (
    <MainContent>
      <Content>
        <ImageContainer
          ImgComponent={() => <Image src={Monkey} width='75px' height='75px' />}
        />
        <ImageContainer
          height='60px'
          ImgComponent={() => <Image src={Logo} width='234px' height='18px' />}
        />
        <Title color={colors.darkBlue}>Sign In</Title>
        <Subtitle color={colors.gray}>Please enter your credentials.</Subtitle>
        <LoginForm />
        <Subtitle color={colors.secondaryGray} align='center'>
          Dont’ have an account? <Link to='/'>Sign up</Link>
        </Subtitle>

        <ImageContainer
          ImgComponent={() => (
            <Image src={Google} height='64px' width='64px' margin='auto' />
          )}
        />
      </Content>
    </MainContent>
  );
};

export default CardBase;

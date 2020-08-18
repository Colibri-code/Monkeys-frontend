import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import AppInput from '../../components/molecules/appInput';
import AppForm from '../../components/molecules/appForm';
import Button from '../../components/atoms/button';
import Google from '../../assets/logo/logo-google.png';
import Monkey from '../../assets/logo/monkey.png';
import Logo from '../../assets/logo/logo.png';

import './style.scss';

const initialState = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
});

const Login = () => {
  const onSubmit = async values => {
    console.log(values);
  };

  return (
    <div className='container'>
      <div className='login-page'>
        <div className='main-content'>
          <div className='content'>
            <div className='img-container'>
              <img src={Monkey} alt='monkey' className='monkey' />
            </div>
            <div className='img-container'>
              <img src={Logo} alt='logo' className='logo' />
            </div>
            <h2 className='title'>Sign In</h2>
            <h3 className='subtitle'>Please enter your credentials.</h3>
            <AppForm
              initialValues={initialState}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <AppInput label='EMAIL ADDRESS' name='email' />
              <AppInput
                label={
                  <p className='password-label'>
                    PASSWORD <Link to='/'>Forgot password?</Link>
                  </p>
                }
                name='password'
                type='password'
              />
              <Button title='Sign in' />
            </AppForm>
            <div className='dont-have-account'>
              <h3 className='subtitle font-gray'>
                Dont’ have an account? <Link to='/'>Sign up</Link>
              </h3>
            </div>
            <div className='img-container'>
              <img src={Google} alt='google' className='google' />
            </div>
          </div>
        </div>
        <div className='img-background'></div>
      </div>
    </div>
  );
};

export default Login;

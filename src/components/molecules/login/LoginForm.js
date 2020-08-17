import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../../api/auth';
import { AppInput, AppForm } from '../form';
import { Button } from '../../atoms/form';
import PasswordLabel from '../../atoms/form/PasswordLabel';

const initialState = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
  password: Yup.string().required().label('Password'),
});

const LoginForm = () => {
  const onSubmit = async values => {
    console.log('gg');
  };
  return (
    <AppForm
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AppInput label='EMAIL ADDRESS' name='email' />
      <AppInput
        label={
          <PasswordLabel>
            PASSWORD <Link to='/'>Forgot password?</Link>
          </PasswordLabel>
        }
        name='password'
        type='password'
      />
      {/* <Button title='Sign in' /> */}
    </AppForm>
  );
};

export default LoginForm;

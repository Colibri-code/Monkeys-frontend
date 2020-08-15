import React from 'react';
import { useFormikContext } from 'formik';

import { ErrorMessage, FormGroup, Input, Label } from '../../atoms/form';

const AppInput = ({ label, type = 'text', name }) => {
  const { values, handleChange, errors, touched } = useFormikContext();
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        value={values[name]}
        name={name}
        type={type}
        onChange={handleChange}
        value={values[name]}
        border={errors[name] && touched[name] ? true : false}
      />
      {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
    </FormGroup>
  );
};

export default AppInput;

import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from '../../atoms/errorMessage';

const AppInput = ({ label, type = 'text', name }) => {
  const { values, handleChange, errors, touched } = useFormikContext();
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        value={values[name]}
        name={name}
        type={type}
        onChange={handleChange}
        value={values[name]}
      />
      {errors[name] && touched[name] && <ErrorMessage error={errors[name]} />}
    </div>
  );
};

export default AppInput;

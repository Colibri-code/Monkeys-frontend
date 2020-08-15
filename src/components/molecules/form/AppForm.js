import React from 'react';
import { Formik } from 'formik';

import { Form } from '../../atoms/form';

const AppForm = ({ initialValues, validationSchema, onSubmit, children }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit }) => <Form onSubmit={handleSubmit}>{children}</Form>}
  </Formik>
);
export default AppForm;

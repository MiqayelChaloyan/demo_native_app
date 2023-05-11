import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

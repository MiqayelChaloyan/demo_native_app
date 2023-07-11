import {object, string} from 'yup';

export const forgotPassValidationSchema = object().shape({
  email: string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

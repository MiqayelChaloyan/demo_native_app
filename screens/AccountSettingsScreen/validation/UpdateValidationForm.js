import * as Yup from 'yup';

export const profileUpdateValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .trim(),
    email: Yup.string()
        .email('Please enter valid email'),
    address: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .trim(),
});

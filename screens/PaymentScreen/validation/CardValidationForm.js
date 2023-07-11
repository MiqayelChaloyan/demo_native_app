import * as Yup from 'yup';

const validateCardNumber = (cardNumber) => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    if (!/^\d+$/.test(cardNumberWithoutSpaces)) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumberWithoutSpaces.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumberWithoutSpaces.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
};

export const creditCardValidationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  number: Yup.string()
    .required('Please enter a card number')
    .test('valid-card-number', 'Invalid card number', (value) =>
      validateCardNumber(value)
    ),
  month: Yup.string()
  .required('Please enter the month')    
  .matches(/^(0[1-9]|1[0-2])$/, 'Invalid month format'),
  day: Yup.string()
  .required('Please enter the day')
  .matches(/^(0[1-9]|1[0-2])$/, 'Invalid day format'),
  ccv: Yup.string()
    .required('Please enter the CVV')
    .trim('Please enter the CVV')
    .matches(/^\d{3,4}$/, 'Invalid CVV')
    .test('valid-cvv', 'Invalid CVV', (value) => value.length <= 3)});


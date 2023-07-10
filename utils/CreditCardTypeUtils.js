import mastercard from '../assets/images/mastercard.png';
import visa from '../assets/images/visa.png';
import amex from '../assets/images/amex.png';
import discover from '../assets/images/discover.png';
import dinersclub from '../assets/images/dinersclub.png';
import jcb from '../assets/images/jcb.png';
import arca from '../assets/images/arca.png';

const getCardType = cardNumber => {
  const cleanedCardNumber = cardNumber.replace(/\D/g, '');

  const cardPatterns = [
    {type: 'visa', pattern: /^4/},
    {type: 'mastercard', pattern: /^5[1-5]/},
    {type: 'amex', pattern: /^3[47]/},
    {type: 'discover', pattern: /^6(?:011|5[0-9]{2})/},
    {type: 'dinersclub', pattern: /^3(?:0[0-5]|[68][0-9])/},
    {type: 'jcb', pattern: /^(?:2131|1800|35\d{3})/},
    {type: 'arca', pattern: /^ARCA/},
  ];

  for (const cardPattern of cardPatterns) {
    if (cleanedCardNumber.match(cardPattern.pattern)) {
      return cardPattern.type;
    }
  }

  return null;
};

export const determineCardType = number => {
  const cardType = getCardType(number);

  switch (cardType) {
    case 'mastercard':
      return mastercard;
    case 'visa':
      return visa;
    case 'amex':
      return amex;
    case 'discover':
      return discover;
    case 'dinersclub':
      return dinersclub;
    case 'jcb':
      return jcb;
    case 'arca':
      return arca;
    default:
      return null;
  }
};

const validate = values => {
  const {
    giftCardNumber,
    controlCode,
  } = values;
  const errors = {};
  const giftCardNumberTester = /^\d{19}$/;
  ;
  const controlCodeTester = /^\d{3}$/;
  if (!giftCardNumber) {
    errors.giftCardNumber = 'Gift Card Number is required';
  } else if (!giftCardNumberTester.test(giftCardNumber)) {
    errors.giftCardNumber = 'Gift Card Number is invalid';
  }
  if (!controlCode) {
    errors.controlCode = 'Control Code is required';
  } else if (!controlCodeTester.test(controlCode)) {
    errors.controlCode = 'Control Code is invalid';
  }
  return errors;
};

export default validate;
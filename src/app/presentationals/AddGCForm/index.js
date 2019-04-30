import React from "react";
import { reduxForm, Field } from 'redux-form';

import * as sc from './style';
import valInput from '../ValidatedInput';
import validate from './validate';

const {
  GiftCardNumberInput,
  ControlCodeInput,
  StyledForm,
  FieldsRow,
  Button,
  SendingMsg,
} = sc;

let AddGCForm = props => (
  <>
    <StyledForm onSubmit={props.handleSubmit}>
      <FieldsRow>
        <GiftCardNumberInput>
          <Field
            placeholder="Gift Card Number"
            name="giftCardNumber"
            component={valInput}
            type="text" />
        </GiftCardNumberInput>
        <ControlCodeInput>
          <Field
            placeholder="Control Code"
            name="controlCode"
            component={valInput}
            type="text" />
        </ControlCodeInput>
      </FieldsRow>
      <Button
        type="submit"
        disabled={props.sending}>
        Apply
      </Button>
      <SendingMsg>
        { props.sending ? 'Sending...' : '' }
      </SendingMsg>
    </StyledForm>
  </>
);

AddGCForm = reduxForm({
  form: 'addGC',
  validate,
})(AddGCForm);

export default AddGCForm;

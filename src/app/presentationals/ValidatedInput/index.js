import React from 'react';
import styled from 'styled-components';

import * as sc from './style';

const {
  StyledInput,
  InputWrapper,
  InputError,
} = sc;

const valInput = ({
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <InputWrapper>
    <StyledInput {...input}
      type={type}
      placeholder={placeholder} />
    {touched &&
      ((error && <InputError>{error}</InputError>) ||
        (warning && <span>{warning}</span>))}
  </InputWrapper>
);

export default valInput;
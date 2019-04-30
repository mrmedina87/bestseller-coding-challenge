import React, { Component } from "react";
import styled from 'styled-components';
import { Field } from 'redux-form';

import colors from '../../constants/colors';
import weights from '../../constants/weights';

export const GiftCardNumberInput = styled.div`
  width: 70%;
  display: inline-block;
  padding-right: 10px;
`;

export const ControlCodeInput = styled.div`
  width: 30%;
  display: inline-block;
`;

export const StyledForm = styled.form`
  margin-top: 10px;
`;

export const FieldsRow = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background: ${colors.textDark};
  font-weight: ${weights.bold};
  font-size: 12px;
  padding: 12px 50px;
  text-transform: uppercase;
  color: ${colors.white}
`;

export const SendingMsg = styled.span`
  display: inline-block;
  font-weight: ${weights.regular};
  font-size: 12px;
  margin-left: 20px;
  color: ${colors.textDark}
`;
import React, { Component } from "react";
import styled from 'styled-components';

import colors from '../../constants/colors';
import weights from '../../constants/weights';

export const AddGCLabel = styled.label`
  color: ${colors.textGrey};
  font-size: 12px;
  font-weight: ${weights.light};
`;

export const StyledAddGiftCard = styled.div`
  background: ${colors.white};
  padding: 20px 10px 3px;
  max-width: 600px;
  margin: 40px auto 20px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  color: ${colors.textDark};
  font-size: 14px;
`;

export const Label = styled.label`
  color: ${colors.textDark};
  font-weight: ${weights.regular};
  font-size: 12px;
`;
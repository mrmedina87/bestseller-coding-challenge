import styled from 'styled-components';

import colors from '../../constants/colors';
import weights from '../../constants/weights';

export const StyledInput = styled.input`
  border: 1px solid ${colors.greyLight};
  font-weight: ${weights.regular};
  font-size: 12px;
  color: ${colors.textDark};
  padding: 10px 10px;
  width: 100%;
  &::placeholder {
    font-weight: ${weights.light};
    color: ${colors.textGrey};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputError = styled.span`
  position: absolute;
  bottom: -20px;
  font-size: 11px;
  color: red;
  right: 0;
`;
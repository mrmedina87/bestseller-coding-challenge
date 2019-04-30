import React from "react";
import styled from 'styled-components';

import colors from '../../constants/colors';
import weights from '../../constants/weights';

const StyledErrorMessage = styled.div`
  color: ${colors.red};
  font-size: 12px;
  font-weight: ${weights.light};
  margin-top: 10px;
`;

const ErrorMessage = props => (
  <StyledErrorMessage>
    {
      props.errorMsg || ''
    }
  </StyledErrorMessage>
);

export default ErrorMessage;
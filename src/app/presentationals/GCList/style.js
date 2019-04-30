import styled from 'styled-components';

import colors from '../../constants/colors';
import weights from '../../constants/weights';

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0px;
`;

export const StyledLi = styled.li`
  background: ${colors.appliedGC};
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const GCTitle = styled.h5`
  color: ${colors.textDark};
  font-size: 12px;
  font-weight: ${weights.regular};
`;

export const GCDiscount = styled.span`
  color: ${colors.textDark};
  font-size: 12px;
  font-weight: ${weights.bold};
  position: absolute;
  right: 10px;
  top: 20px;
`;

export const GCNumber = styled.span`
  color: ${colors.textDark};
  font-size: 12px;
  font-weight: ${weights.light};
`;
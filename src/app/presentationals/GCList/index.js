import React from "react";

import * as sc from './style';

const {
  StyledUl,
  StyledLi,
  GCTitle,
  GCDiscount,
  GCNumber,
} = sc;

const GCList = props => {
  const {
    gcList,
  } = props;
  const gcTitle = 'Gift Card';
  return <>
    {
      gcList.length > 0 ?
        <StyledUl>
          { gcList.map(item => {
            const {
              id,
              giftCardNumber,
              discount,
            } = item;
            return <StyledLi key={id}>
              <GCTitle>{ gcTitle }</GCTitle>
              <GCNumber>
                { giftCardNumber.split('').map((i, idx) => idx <= 15 ? '*' : i).join('') }
              </GCNumber>
              <GCDiscount>
                { `-€${parseInt(discount, 10).toFixed(2)}` }
              </GCDiscount>
            </StyledLi>
          }) }
        </StyledUl> :
        ''
    }
  </>
};

export default GCList;

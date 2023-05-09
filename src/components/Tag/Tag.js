import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

const Tag = ({
  variant
}) => {
  // There are 3 variants possible:
  //   - new-release
  //   - on-sale
  const backgroundColor = variant === 'new-release' ? COLORS.secondary : COLORS.primary;

  return (
      <Wrapper style={{'--backgroundColor': backgroundColor}}>
        {variant === 'new-release' ? 'Just Released!' : 'Sale'}
      </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--backgroundColor);
  color: ${COLORS.white};
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  padding: 6px 10px;
  font-size: 14px;
  line-height: (16/14);
`;

export default Tag;

import React from 'react';

import { Container, H1 } from './styles';

const TitlesRightSide = ({ children, color, size, ...rest }) => {
  return (
    <Container>
      <H1 color={color} size={size} {...rest}>
        {children}
      </H1>
    </Container>
  );
};

export default TitlesRightSide;

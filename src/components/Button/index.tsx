import React from 'react';

import { Container, TextConfig } from './styles';
import { ButtonProps } from './props';

export const Button = ({
  primaryColor = false,
  children,
  ...rest
}: ButtonProps) => (
  <Container {...rest} primaryColor={primaryColor}>
    <TextConfig primaryColor={primaryColor}>{children}</TextConfig>
  </Container>
);

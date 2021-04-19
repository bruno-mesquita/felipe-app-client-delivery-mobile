import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, TextConfig } from './styles';
import { ButtonProps } from './props';

export const Button = ({
  primaryColor = false,
  children,
  loading = false,
  ...rest
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <Container {...rest} primaryColor={primaryColor}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size={30} />
      ) : (
        <TextConfig primaryColor={primaryColor}>{children}</TextConfig>
      )}
    </Container>
  );
};

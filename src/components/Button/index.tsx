import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Text, styles } from './styles';
import { ButtonProps } from './props';

export const Button = ({
  primaryColor = false,
  children,
  loading = false,
  style,
  textProps,
  ...rest
}: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <Container
      {...rest}
      style={[styles.shadow, style]}
      primaryColor={primaryColor}
    >
      {loading ? (
        <ActivityIndicator
          color={primaryColor ? colors.primary : colors.secundary}
          size={30}
        />
      ) : (
        <Text {...textProps} primaryColor={primaryColor}>
          {children}
        </Text>
      )}
    </Container>
  );
};

import { ReactNode, ComponentType } from 'react';
import { TouchableOpacityProps, TextProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  primaryColor?: boolean;
  loading?: boolean;
  textProps?: TextProps;
}

export type StyledButtonProps = ComponentType<ButtonProps>;

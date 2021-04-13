import { ReactNode, ComponentType } from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  primaryColor?: boolean;
}

export type StyledButtonProps = ComponentType<ButtonProps>;

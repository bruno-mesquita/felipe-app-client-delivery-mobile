import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './styles';

export const CardBase = ({ children, style, ...rest }: TouchableOpacityProps) => (
  <TouchableOpacity style={[styles.container, style]} {...rest}>
    {children}
  </TouchableOpacity>
);

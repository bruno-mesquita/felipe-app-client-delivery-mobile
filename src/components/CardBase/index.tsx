import { TouchableOpacity } from 'react-native';

import { Props } from './props';
import styles from './styles';

export const CardBase = ({ children, style, ...rest }: Props) => (
  <TouchableOpacity style={[styles.container, style]} {...rest}>
    {children}
  </TouchableOpacity>
);

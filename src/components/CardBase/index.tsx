import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Props } from './props';
import styles from './styles';

export const CardBase = ({ children, onPress, style }: Props) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
    {children}
  </TouchableOpacity>
);

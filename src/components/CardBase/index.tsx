import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Props } from './props';
import styles from './styles';

export const CardBase = ({ children, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    {children}
  </TouchableOpacity>
);

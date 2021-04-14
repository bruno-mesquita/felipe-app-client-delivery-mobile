import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Props } from './props';
import styles from './styles';

const CardBase = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default CardBase;

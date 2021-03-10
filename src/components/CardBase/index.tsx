import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Props } from './props';
import styles from './styles';

const CardBase = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export default CardBase;

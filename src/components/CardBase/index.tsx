import React from 'react';
import { View } from 'react-native';

import { Props } from '../../utils/props';

const CardBase = ({ children }: Props) => {
  return (
    <View
      style={{
        height: 110,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        elevation: 7,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 5,
      }}
    >
      {children}
    </View>
  );
};

export default CardBase;

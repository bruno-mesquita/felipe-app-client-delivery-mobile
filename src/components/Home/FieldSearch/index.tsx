import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Input, styles } from './styles';
import { Props } from './props';

const FieldSearch = ({ onChangeText, text }: Props) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Pesquise aqui"
        value={text}
        onChangeText={onChangeText}
      />
      <TouchableOpacity>
        <Ionicons name="search" size={24} style={{ color: '#727272' }} />
      </TouchableOpacity>
    </View>
  );
};

export default FieldSearch;

import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import api from '../../../../../services/api';
import { Input, styles } from './styles';
import { Props } from './props';

export const FieldSearch = ({ response }: Props) => {
  const [text, setText] = useState('');

  const searchForEstablishment = async () => {
    try {
      const { data } = await api.post(`/establishments-by-name`, {
        name: text,
      });

      response(data.result);
    } catch (err) {
      console.log(err);
      response({});
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Pesquise aqui" value={text} onChangeText={setText} />
      <TouchableOpacity onPress={searchForEstablishment}>
        <Ionicons name="search" size={24} style={{ color: '#727272' }} />
      </TouchableOpacity>
    </View>
  );
};

import { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import api from '@services/api';
import { Input, styles } from './styles';
import { Props } from './props';

export const FieldSearch = ({ response, refreshing, categoryName }: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (refreshing) setText('');
  }, [refreshing]);

  const searchForEstablishment = async () => {
    try {
      const { data } = await api.get('/establishments-by-name', {
        params: {
          name: text,
          category: categoryName,
        },
      });

      response(data.result);
    } catch (err) {
      response([]);
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

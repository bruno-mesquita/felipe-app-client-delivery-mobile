import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from 'native-base';

import api from '@services/api';
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
    <Input
      my="20px"
      alignSelf="center"
      w="90%"
      bg="#fff"
      variant="outline"
      placeholder="Pesquise aqui"
      value={text}
      onChangeText={setText}
      rightElement={
        <TouchableOpacity
          onPress={searchForEstablishment}
          style={{ marginRight: 10 }}
        >
          <Ionicons name="search" size={24} style={{ color: '#727272' }} />
        </TouchableOpacity>
      }
    />
  );
};

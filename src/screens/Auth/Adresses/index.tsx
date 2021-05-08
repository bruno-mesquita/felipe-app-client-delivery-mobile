import React, { useEffect, useState, useCallback } from 'react';
import { Text, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card } from './Components';
import { Container, ButtonAdd, Empty } from './styles';
import { Address } from './props';

export const Adresses = ({ navigation }: ScreenAuthProps<'Adresses'>) => {
  const { colors } = useTheme();

  const [adresses, setAdresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const getAdresses = useCallback(async () => {
    try {
      const api = getApi();

      const { data } = await api.get('/adresses-client');

      setAdresses(data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro ao buscar endereços');
    }
  }, []);

  useEffect(() => {
    getAdresses();
  }, [getAdresses]);

  const addAddress = () => navigation.navigate('AddAddress');

  const EmptyComponent = () => (
    <Empty>
      <Ionicons name="location-sharp" size={150} color={colors.primary} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Sem endereços</Text>
    </Empty>
  );

  const onRefresh = async () => {
    setPage(0);
    await getAdresses();
  };

  const loadMore = async () => {
    if (!finish) {
      const newPage = page + 1;
      setPage(newPage);

      const api = getApi();

      const { data } = await api.get('/adresses-client', {
        params: { page: newPage },
      });

      if (data.result.length === 0) {
        setFinish(true);
      } else {
        setAdresses(old => [...old, ...data.result]);
      }
    }
  };

  return (
    <Container>
      <FlatList
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}
        style={{ width: '100%' }}
        data={adresses}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonAdd onPress={addAddress}>
        <Ionicons name="add" size={30} color={colors.secundary} />
      </ButtonAdd>
    </Container>
  );
};

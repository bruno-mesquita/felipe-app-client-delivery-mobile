import React, { useState, useCallback } from 'react';
import { Text, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useFocusEffect } from '@react-navigation/native';

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

  const getAdresses = useCallback(async (newPage: number) => {
    try {
      const api = getApi();

      const { data } = await api.get('/adresses-client', {
        params: { page: newPage },
      });

      setAdresses(old => old.concat(data.result));
    } catch (err) {
      Alert.alert('Erro ao buscar endereços');
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getAdresses(page);
    }, [getAdresses, page]),
  );

  const EmptyComponent = () => (
    <Empty>
      <Ionicons name="location-sharp" size={150} color={colors.primary} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Sem endereços</Text>
    </Empty>
  );

  const onRefresh = async () => {
    setLoading(true);
    setPage(0);
  };

  const loadMore = async () => {
    setLoading(true);
    setPage(page + 1);
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
      <ButtonAdd onPress={() => navigation.navigate('AddAddress')}>
        <Ionicons name="add" size={30} color={colors.secundary} />
      </ButtonAdd>
    </Container>
  );
};

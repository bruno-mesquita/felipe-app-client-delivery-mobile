import React, { useEffect, useState, useCallback } from 'react';
import { Text, FlatList, RefreshControl, Alert } from 'react-native';
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

  return (
    <Container>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAdresses} />
        }
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}
        style={{ width: '100%' }}
        data={adresses}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonAdd onPress={addAddress}>
        <Text>
          <Ionicons name="add" size={30} color={colors.secundary} />
        </Text>
      </ButtonAdd>
    </Container>
  );
};

import React, { useEffect, useState, useCallback } from 'react';
import { Text, FlatList, RefreshControl, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Card } from './Components';
import { Container, ButtonAdd, Empty } from './styles';
import api from '../../../services/api';
import { Address } from './props';

const Adresses = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [adresses, setAdresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  const getAdresses = useCallback(async () => {
    try {
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
        keyExtractor={item => item.id}
      />
      <ButtonAdd onPress={addAddress}>
        <Text>
          <Ionicons name="add" size={30} color={colors.secundary} />
        </Text>
      </ButtonAdd>
    </Container>
  );
};

export default Adresses;

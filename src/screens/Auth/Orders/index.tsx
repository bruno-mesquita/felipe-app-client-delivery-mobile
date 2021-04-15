import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { AxiosError } from 'axios';

import { NoOrders, Card } from './Components';

import api from '../../../services/api';
import styles from './styles';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrders = useCallback(async () => {
    try {
      const { data } = await api.get('/clients/orders');

      setOrders(data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const error = err as AxiosError;
      Alert.alert('Erro ao buscar os seus pedidos, tente novamente');
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      data={orders}
      ListEmptyComponent={NoOrders}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Card {...item} />}
      onRefresh={getOrders}
      refreshing={loading}
    />
  );
};

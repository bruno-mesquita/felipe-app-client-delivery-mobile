import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';

import { getApi } from '@services/api';

import { NoOrders, Card } from './Components';
import styles from './styles';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const getOrders = useCallback(async () => {
    try {
      const api = getApi();

      const { data } = await api.get('/clients/orders');

      setOrders(data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro ao buscar os seus pedidos, tente novamente');
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const onRefresh = async () => {
    setPage(0);
    await getOrders();
  };

  const loadMore = async () => {
    if (!finish) {
      const newPage = page + 1;
      setPage(newPage);

      const api = getApi();

      const { data } = await api.get('/clients/orders', {
        params: { page: newPage },
      });

      if (data.result.length === 0) {
        setFinish(true);
      } else {
        setOrders(old => [...old, ...data.result]);
      }
    }
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      data={orders}
      refreshing={loading}
      onRefresh={onRefresh}
      ListEmptyComponent={NoOrders}
      onEndReached={loadMore}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Card {...item} />}
    />
  );
};

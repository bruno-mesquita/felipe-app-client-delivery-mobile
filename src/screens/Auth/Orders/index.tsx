import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { AxiosError } from 'axios';

import { NoOrders, Card } from './Components';

import api from '../../../services/api';
import { Container } from './styles';

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    try {
      const { data } = await api.get('/clients/orders');

      setOrders(data.result);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Container>
      {orders.length === 0 ? (
        <NoOrders />
      ) : (
        <SafeAreaView>
          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              paddingTop: 20,
              paddingBottom: 50,
            }}
            data={orders}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Card {...item} />}
          />
        </SafeAreaView>
      )}
    </Container>
  );
};

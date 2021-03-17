import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { NoOrders, Card } from './Components';

import api from '../../../services/api';
import { Container } from './styles';
import ordersMock from './mocks';

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersMock);
  }, []);

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

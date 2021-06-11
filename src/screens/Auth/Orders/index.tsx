import React, { useState, useCallback, useRef } from 'react';
import { FlatList, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { OrderProvider } from '@contexts/OrderContext';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { NoOrders, Card, EvaluationModal, OrderInfoModal } from './Components';
import styles from './styles';

const OrdersScreen = (_: ScreenAuthProps<'Orders'>) => { // eslint-disable-line
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

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

  useFocusEffect(
    useCallback(() => {
      getOrders();
    }, [getOrders]),
  );

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
    <>
      <EvaluationModal modalRef={modalRateRef} />
      <OrderInfoModal modalRef={modalInfoRef} />
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={orders}
        refreshing={loading}
        onRefresh={onRefresh}
        ListEmptyComponent={NoOrders}
        onEndReached={loadMore}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            {...item}
            modalInfoRef={modalInfoRef}
            modalRateRef={modalRateRef}
          />
        )}
      />
    </>
  );
};

export const Orders = (props: ScreenAuthProps<'Orders'>) => (
  <OrderProvider>
    <OrdersScreen {...props} />
  </OrderProvider>
);

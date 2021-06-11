import React, { useState, useCallback, useRef } from 'react';
import { FlatList, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { OrderProvider } from '@contexts/OrderContext';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { NoOrders, Card, EvaluationModal, OrderInfoModal } from './Components';

const OrdersScreen = ({ navigation }: ScreenAuthProps<'Orders'>) => { // eslint-disable-line
  const api = getApi();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [finish, setFinish] = useState(false);

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

  const getOrders = useCallback(async () => {
    try {
      const { data } = await api.get('/clients/orders');

      setOrders(data.result);
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao buscar os seus pedidos, tente novamente',
        [
          {
            onPress: () =>
              navigation.canGoBack() ? navigation.goBack() : null,
            text: 'Ok',
          },
        ],
      );
    } finally {
      setLoading(false);
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
        style={{ paddingTop: 15 }}
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

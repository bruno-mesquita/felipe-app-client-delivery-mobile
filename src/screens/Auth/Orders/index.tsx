import { useState, useCallback, useRef, useEffect } from 'react';
import { FlatList, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { OrderProvider } from '@contexts/OrderContext';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { NoOrders, Card, EvaluationModal, OrderInfoModal } from './Components';

const OrdersScreen = ({ navigation }: ScreenAuthProps<'Orders'>) => {
  const api = getApi();
  const isFocused = useIsFocused();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

  const getOrders = useCallback(async (newPage: number) => {
    try {
      const { data } = await api.get('/clients/orders', {
        params: {
          page: newPage,
        },
      });

      if(newPage === 0) setOrders(data.result);
      else setOrders(old => old.concat(data.result));
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

  useEffect(() => {
    if (isFocused) getOrders(page);
  }, [isFocused, getOrders, page]);

  const onRefresh = () => {
    setLoading(true);
    setPage(0);
  };

  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
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
        onEndReachedThreshold={0}
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

import { useState, useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useToast } from 'native-base';

import api from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { OrderProvider } from '@contexts/OrderContext';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { NoOrders, Card, EvaluationModal, OrderInfoModal } from './Components';

const OrdersScreen = ({ navigation }: ScreenAuthProps<'Orders'>) => {
  const isFocused = useIsFocused();
  const toast = useToast();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

  useEffect(() => {
    if (isFocused) {
      api
        .get('/clients/orders', { params: { page } })
        .then(({ data }) => {
          if (page === 0) setOrders(data.result);
          else setOrders(old => old.concat(data.result));
        })
        .catch(() => {
          toast.show({
            title: 'Erro ao buscar pedidos',
            status: 'error',
          });
        })
        .finally(() => setLoading(false));
    }
  }, [isFocused, page]);

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

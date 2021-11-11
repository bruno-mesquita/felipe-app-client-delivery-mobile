import { useState, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import api from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { NotFound, Card } from './Components';
import { DeliverymansProps } from './props';
import { Container, Deleverymans } from './styles';

export const Deliveryman = ({
  navigation,
}: ScreenAuthProps<'Deliverymans'>) => {


  const isFocused = useIsFocused();

  const [deliverymans, setDeliverymans] = useState<DeliverymansProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);

  const getDeliverymans = useCallback(async (newPage: number) => {
    try {
      const { data } = await api.get('/deliveryman', { params: { page: newPage } });

      if(newPage === 0) setDeliverymans(data.result);
      else setDeliverymans(old => old.concat(data.result));
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao buscar os motoboys, por favor tente novamente',
        [
          {
            onPress: () =>
              navigation.canGoBack() ? navigation.goBack() : null,
            text: 'Ok',
          },
        ],
      );
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if(isFocused) getDeliverymans(page);
  }, [getDeliverymans, isFocused, page]);

  const onRefresh = () => {
    setRefreshing(true);
    setPage(0);
  };

  const loadMore = () => {
    setRefreshing(true);
    setPage(old => old + 1);
  };

  return (
    <Container>
      <Deleverymans
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={deliverymans}
        ListEmptyComponent={NotFound}
        onEndReachedThreshold={0}
        onEndReached={loadMore}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => <Card {...item} />}
      />
    </Container>
  );
};

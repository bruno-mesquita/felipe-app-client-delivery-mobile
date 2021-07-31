import React, { useState, useCallback, useEffect } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { NotFound, Card } from './Components';
import { DeliverymansProps } from './props';
import { Container, Content, Deleverymans } from './styles';

export const Deliveryman = ({
  navigation,
}: ScreenAuthProps<'Deliverymans'>) => {
  const api = getApi();

  const isFocused = useIsFocused();

  const [deliverymans, setDeliverymans] = useState<DeliverymansProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);

  const getDeliverymans = useCallback(async () => {
    try {
      const { data } = await api.get('/deliveryman', { params: { page } });

      setDeliverymans(data.result);
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
    if(isFocused) getDeliverymans();
  }, [getDeliverymans, isFocused]);

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
      <Content refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Deleverymans
          data={deliverymans}
          ListEmptyComponent={NotFound}
          onEndReachedThreshold={0}
          onEndReached={loadMore}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => <Card {...item} />}
        />
      </Content>
    </Container>
  );
};

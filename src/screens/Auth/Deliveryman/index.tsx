import React, { useState, useCallback } from 'react';
import { Alert, RefreshControl } from 'react-native';

import { getApi } from '@services/api';

import { NotFound, Card } from './Components';

import { DeliverymansProps } from './props';
import { Container, Content, Deleverymans } from './styles';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { useFocusEffect } from '@react-navigation/native';

export const Deliveryman = ({
  navigation,
}: ScreenAuthProps<'Deliverymans'>) => {
  const api = getApi();

  const [deliverymans, setDeliverymans] = useState<DeliverymansProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(0);

  const getDeliverymans = useCallback(async () => {
    try {
      const { data } = await api.get('/deliveryman');

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

  useFocusEffect(
    useCallback(() => {
      getDeliverymans();
    }, [getDeliverymans]),
  );

  const onRefresh = () => {
    setRefreshing(true);
    setPage(0);
  };

  const loadMore = () => {
    setRefreshing(true);
    setPage(old => old + 1);
  };

  const ContentRefresh = (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  return (
    <Container>
      <Content refreshControl={ContentRefresh}>
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

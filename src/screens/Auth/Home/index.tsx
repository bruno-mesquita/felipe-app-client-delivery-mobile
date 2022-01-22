import { useState, useCallback, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Flex } from 'native-base';

import { CartButton } from '@components';
import api from '@services/api';
import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { NotFound, Card, FieldSearch } from './Components';
import { Establishment } from './props';

export const Home = ({
  navigation,
  route: { params },
}: ScreenAuthProps<'Home'>) => {
  const isFocused = useIsFocused();

  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [page, setPage] = useState(0);

  const getEstablishments = useCallback(async (newPage: number) => {
    try {
      const { data } = await api.get('/establishments', {
        params: {
          category: params.categoryName,
          page: newPage,
        },
      });

      if (newPage === 0) setEstablishments(data.result);
      else setEstablishments(old => old.concat(data.result));
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao buscar estabelecimentos, por favor tente novamente',
        [
          {
            onPress: () =>
              navigation.canGoBack() ? navigation.goBack() : null,
            text: 'Ok',
          },
        ]
      );
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (isFocused) getEstablishments(page);
  }, [getEstablishments, page, isFocused]);

  const searchResult = (values: any) => {
    setEstablishments(values);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(0);
  };

  const loadMore = () => {
    setRefreshing(true);
    setPage(old => old + 1);
  };

  const _renderItem = useCallback(({ item }) => <Card {...item} />, []);

  return (
    <Flex flex={1}>
      <FieldSearch
        categoryName={params.categoryName}
        refreshing={refreshing}
        response={searchResult}
      />
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 20 }}
        data={establishments}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={() => <NotFound refreshing={refreshing} />}
        onEndReachedThreshold={0}
        onEndReached={loadMore}
        keyExtractor={({ id }) => id.toString()}
        renderItem={_renderItem}
      />
      <CartButton />
    </Flex>
  );
};

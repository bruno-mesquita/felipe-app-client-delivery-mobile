import React, { useState, useCallback, useEffect } from 'react';
import { View, Alert, RefreshControl } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';

import { CartButton } from '@components';
import { getApi } from '@services/api';
import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { NotFound, Card, FieldSearch } from './Components';
import { Container, Content, Establishments } from './styles';
import { Establishment } from './props';

export const Home = ({
  navigation,
  route: { params },
}: ScreenAuthProps<'Home'>) => {
  const headerHeight = useHeaderHeight();
  const isFocused = useIsFocused();

  const api = getApi();

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

      if(newPage === 0) setEstablishments(data.result);
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
        ],
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

  return (
    <Container>
      <Content refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: headerHeight * 0.3,
            paddingBottom: headerHeight * 0.3,
          }}
        >
          <FieldSearch
            categoryName={params.categoryName}
            refreshing={refreshing}
            response={searchResult}
          />
        </View>

        <Establishments
          data={establishments}
          ListEmptyComponent={() => <NotFound refreshing={refreshing} />}
          onEndReachedThreshold={0}
          onEndReached={loadMore}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => <Card {...item} />}
        />
      </Content>
      <CartButton />
    </Container>
  );
};

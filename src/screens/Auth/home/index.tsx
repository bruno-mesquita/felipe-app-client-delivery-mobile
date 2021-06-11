import React, { useState, useCallback } from 'react';
import { View, Alert, RefreshControl } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

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

  const api = getApi();

  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const getEstablishments = useCallback(async () => {
    try {
      const { data } = await api.get('/establishments', {
        params: {
          category: params.categoryName,
        },
      });

      setEstablishments(data.result);
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
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getEstablishments();
    }, [getEstablishments]),
  );

  const searchResult = (values: any) => {
    setEstablishments(values);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getEstablishments();
    setRefreshing(false);
  };

  const ContentRefresh = (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  return (
    <Container>
      <Content refreshControl={ContentRefresh}>
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
          ListEmptyComponent={NotFound}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => <Card {...item} />}
        />
      </Content>
      <CartButton />
    </Container>
  );
};

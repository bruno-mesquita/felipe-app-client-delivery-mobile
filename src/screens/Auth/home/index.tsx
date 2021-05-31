import React, { useState, useCallback } from 'react';
import { View, FlatList, Alert, RefreshControl } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

import { CartButton } from '@components';
import { getApi } from '@services/api';
import { ScreenAuthProps } from '../../../utils/ScreenProps';

import { NotFound, Card, FieldSearch, Tab } from './Components';
import { Container, Content, Establishments } from './styles';
import { Category, Establishment } from './props';

export const Home = ({ route: { params } }: ScreenAuthProps<'Home'>) => {
  const headerHeight = useHeaderHeight();

  const api = getApi();

  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [categorySelected, setCategorySelected] = useState<number | null>(null);
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
      );
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getEstablishments();
    }, [getEstablishments]),
  );

  const onChangeCategory = async (id: number) => {
    try {
      setCategorySelected(id);

      const { data } = await api.get('/establishments', {
        params: {
          categoryId: id,
        },
      });

      setEstablishments(data.result);
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao buscar as categorias, por favor tente novamente',
      );
    }
  };

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
        <View style={{ alignItems: 'center', paddingTop: headerHeight * 0.3 }}>
          <FieldSearch refreshing={refreshing} response={searchResult} />
        </View>

        <FlatList
          contentContainerStyle={{ paddingVertical: 30 }}
          showsHorizontalScrollIndicator={false}
          data={null}
          horizontal
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <Tab
              {...item}
              onPress={onChangeCategory}
              selected={categorySelected}
            />
          )}
        />
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

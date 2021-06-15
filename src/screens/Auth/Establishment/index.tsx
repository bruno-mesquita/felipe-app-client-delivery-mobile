import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert, ScrollView } from 'react-native';

import { CartButton, Tab } from '@components';
import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card, EstablishmentInfo } from './Components';
import { Container, Divider, Content } from './styles';
import { Menu, Product } from './props';

export const Establishment = ({
  route: { params },
  navigation,
}: ScreenAuthProps<'Establishment'>) => {
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const getMenus = useCallback(async () => {
    try {
      const api = getApi();
      const { data } = await api.get(`/establishments/${params.id}/menus`);

      setMenus(data.result);
      setMenuSelected(data.result.length > 0 ? data.result[0].id : null);
    } catch (err) {
      Alert.alert('Erro', 'Erro ao recuperar os dados do estabelecimento', [
        {
          text: 'Voltar',
          onPress: () => navigation.goBack(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProducts = useCallback(async (menuId: number, newPage: number) => {
    try {
      const api = getApi();

      const { data } = await api.get(`/menus/${menuId}/products`, {
        params: {
          page: newPage,
        },
      });

      setProducts(old => old.concat(data.result));
    } catch (err) {
      Alert.alert(
        'Erro',
        'Houve um erro ao recuperar os dados do estabelecimento',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  useEffect(() => {
    if (menuSelected) getProducts(menuSelected, 0);
  }, [menuSelected, getProducts]);

  const Header = () => (
    <>
      <EstablishmentInfo />
      <Divider />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menus.map(menu => (
          <Tab
            key={menu.id.toString()}
            {...menu}
            onPress={setMenuSelected}
            selected={menuSelected}
          />
        ))}
      </ScrollView>
    </>
  );

  const onRefresh = async () => {
    setLoading(true);
    setPage(0);
  };

  const loadMore = async () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <Container>
      <Content>
        <FlatList
          refreshing={loading}
          onRefresh={onRefresh}
          onEndReached={loadMore}
          ListHeaderComponent={Header}
          ListHeaderComponentStyle={{ marginBottom: 15 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={products}
          renderItem={({ item }) => (
            <Card {...item} establishmentId={params.id} fee={params.fee} />
          )}
        />
      </Content>
      <CartButton />
    </Container>
  );
};

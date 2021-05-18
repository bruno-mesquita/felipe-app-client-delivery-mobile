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
  const [finish, setFinish] = useState(false);

  const getMenus = useCallback(async () => {
    try {
      const api = getApi();
      const { data } = await api.get(`/establishments/${params.id}/menus`);

      setMenus(data.result);
      setMenuSelected(data.result.length > 0 ? data.result[0].id : null);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      Alert.alert('Erro', 'Erro ao recuperar os dados do estabelecimento', [
        {
          text: 'Voltar',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }, []);

  const getProducts = useCallback(async (menuId: number) => {
    try {
      const api = getApi();

      const { data } = await api.get(`/menus/${menuId}/products`);

      setProducts(data.result);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert(
        'Erro',
        'Houve um erro ao recuperar os dados do estabelecimento',
      );
    }
  }, []);

  useEffect(() => {
    getMenus();
  }, [getMenus]);

  useEffect(() => {
    if (menuSelected) {
      getProducts(menuSelected);
    }
  }, [menuSelected, getProducts]);

  const onPressMenu = (id: number) => {
    setMenuSelected(id);
  };

  const Header = () => (
    <>
      <EstablishmentInfo />
      <Divider />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menus.map(menu => (
          <Tab
            key={menu.id.toString()}
            {...menu}
            onPress={onPressMenu}
            selected={menuSelected}
          />
        ))}
      </ScrollView>
    </>
  );

  const onRefresh = async () => {
    setPage(0);
    await getProducts(menuSelected);
  };

  const loadMore = async () => {
    if (!finish) {
      const newPage = page + 1;
      setPage(newPage);

      const api = getApi();

      const { data } = await api.get('/adresses-client', {
        params: { page: newPage },
      });

      if (data.result.length === 0) {
        setFinish(true);
      } else {
        setProducts(old => [...old, ...data.result]);
      }
    }
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
            <Card {...item} establishmentId={params.id} />
          )}
        />
      </Content>
      <CartButton />
    </Container>
  );
};

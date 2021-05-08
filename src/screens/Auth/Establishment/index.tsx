import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';

import { CartButton, Tab } from '@components';
import { getApi } from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card, EstablishmentInfo } from './Components';
import { Container, Divider, Content } from './styles';
import { Menu, Product } from './props';

export const Establishment = ({
  route: { params },
}: ScreenAuthProps<'Establishment'>) => {
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getMenus = useCallback(async () => {
    try {
      const api = getApi();
      const { data } = await api.get(`/establishments/${params.id}/menus`);

      setMenus(data.result);
      setMenuSelected(data.result[0].id);
    } catch (err) {
      Alert.alert('Erro ao recuperar os dados do estabelecimento');
    }
  }, []);

  const getProducts = useCallback(async (menuId: number) => {
    try {
      const api = getApi();

      const { data } = await api.get(`/menus/${menuId}/products`);

      setProducts(data.result);
    } catch (err) {
      Alert.alert('Erro ao recuperar os dados do estabelecimento');
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

  return (
    <Container>
      <Content>
        <EstablishmentInfo />
        <Divider />
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          showsHorizontalScrollIndicator={false}
          data={menus}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <Tab {...item} onPress={onPressMenu} selected={menuSelected} />
          )}
        />

        <FlatList
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

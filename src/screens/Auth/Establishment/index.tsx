import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';

import CartButton from '../../../components/CartButton';
import Tab from '../../../components/Tab';

import { Card, EstablishmentInfo } from './Components';

import api from '../../../services/api';
import { Container, Divider, Content } from './styles';
import { Menu, Product } from './props';
import apiMock from './mock';

const EstablishmentScreen = ({ route: { params } }) => {
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getMenus = useCallback(async () => {
    try {
      // `/establishment/${params.id}/menus`
      const { data } = await apiMock.getMenus();

      setMenus(data.result);
      setMenuSelected(data.result[0].id);
    } catch (err) {
      Alert.alert('Erro ao recuperar os dados do estabelecimento');
    }
  }, []);

  const getProducts = useCallback(async (menuId: number) => {
    try {
      // `/menus/${menuId}/products`
      const { data } = await apiMock.getProducts(menuId);

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
        <EstablishmentInfo id={params.id} />
        <Divider />
        <FlatList
          contentContainerStyle={{ paddingBottom: 10 }}
          showsHorizontalScrollIndicator={false}
          data={menus}
          horizontal
          renderItem={({ item }) => (
            <Tab {...item} onPress={onPressMenu} selected={menuSelected} />
          )}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
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

export default EstablishmentScreen;

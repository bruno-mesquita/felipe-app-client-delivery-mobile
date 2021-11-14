import { useEffect, useState, useCallback } from 'react';
import { FlatList, Alert, ScrollView, View } from 'react-native';

import { CartButton, Tab } from '@components';
import api from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card, EstablishmentInfo } from './Components';
import { Container, Divider } from './styles';
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

  const getProducts = useCallback(async (menuId: number, newPage: number) => {
    try {
      const { data } = await api.get(`/menus/${menuId}/products`, {
        params: {
          page: newPage,
        },
      });

      if(newPage === 0) setProducts(data.result);
      else setProducts(old => old.concat(data.result));
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
    console.log('entrei');
    api.get(`/establishments/${params.id}/menus`)
      .then(({ data }) => {
        setMenus(data.result);
        if(menuSelected) setMenuSelected(menuSelected);
        else setMenuSelected(data.result.length > 0 ? data.result[0].id : null);
      })
      .catch(() => {
        Alert.alert('Erro', 'Erro ao recuperar os dados do estabelecimento', [
          {
            text: 'Voltar',
            onPress: () => navigation.goBack(),
          },
        ]);
      }).finally(() => setLoading(false))
  }, []);

  useEffect(() => {
    if (menuSelected) getProducts(menuSelected, page);
  }, [menuSelected, getProducts, page]);

  const onPressMenu = (id: number) => {
    if(menuSelected !== id) {
      setMenuSelected(id);
      setProducts([]);
      setPage(0);
      setLoading(true);
    }
  }

  const onRefresh = () => {
    setLoading(true);
    setPage(0);
  };

  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <Container>
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
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReachedThreshold={0}
        onEndReached={loadMore}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={({ item }) => (
          <Card {...item} establishmentId={params.id} fee={params.fee} />
        )}
      />
      <CartButton />
    </Container>
  );
};

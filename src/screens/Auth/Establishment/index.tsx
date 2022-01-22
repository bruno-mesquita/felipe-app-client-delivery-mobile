import { useEffect, useState, useCallback } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Flex, Divider } from 'native-base';

import { CartButton, Tab } from '@components';
import api from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { useGetMenus } from '@hooks';

import { Card, EstablishmentInfo } from './Components';
import type { Product } from './props';

export const Establishment = ({
  route: { params },
}: ScreenAuthProps<'Establishment'>) => {
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const { menus } = useGetMenus(params.id);

  useEffect(() => {
    if (menus.length > 0 && !menuSelected) {
      setMenuSelected(menus[0].id);
    }
  }, [menus]);

  useEffect(() => {
    if (menuSelected) {
      api
        .get(`/menus/${menuSelected}/products`, { params: { page } })
        .then(({ data }) => {
          setProducts(old =>
            page === 0 ? data.result : old.concat(data.result)
          );
        })
        .finally(() => setLoading(false));
    }
  }, [menuSelected, page]);

  const onPressMenu = (id: number) => {
    if (menuSelected !== id) {
      setMenuSelected(id);
      setProducts([]);
      setPage(0);
      setLoading(true);
    }
  };

  const onRefresh = () => {
    setLoading(true);
    setPage(0);
  };

  const loadMore = () => {
    setLoading(true);
    setPage(page + 1);
  };

  const _renderItem = useCallback(
    ({ item }) => (
      <Card {...item} establishmentId={params.id} fee={params.fee} />
    ),
    []
  );

  return (
    <Flex flex={1} align="center">
      <EstablishmentInfo />
      <Divider my="2" />
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
        onEndReached={loadMore}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={_renderItem}
      />
      <CartButton />
    </Flex>
  );
};

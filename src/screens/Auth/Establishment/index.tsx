import { useEffect, useState, useCallback, useRef } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Flex, Divider } from 'native-base';

import { CartButton, Tab, ModalItem } from '@components';
import api from '@services/api';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { useGetMenus } from '@hooks';

import { Card, EstablishmentInfo } from './Components';
import type { Product } from './props';

export const Establishment = ({
  route: { params },
}: ScreenAuthProps<'Establishment'>) => {
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const modalRef = useRef(null);

  const { data: menus } = useGetMenus(params.id, values => {
    if (values.length > 0 && !menuSelected) {
      setMenuSelected(values[0].id);
    }
  });

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

  const onPressProduct = (productId: number) => {
    setSelectedItem(productId);
    modalRef?.current?.open();
  };

  const _renderItem = useCallback(
    ({ item }) => <Card {...item} onPress={() => onPressProduct(item.id)} />,
    []
  );

  return (
    <>
      <ModalItem
        modalRef={modalRef}
        menuId={menuSelected}
        productId={selectedItem}
      />
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
          keyExtractor={({ id }) => id.toString()}
          data={products}
          renderItem={_renderItem}
        />
        <CartButton />
      </Flex>
    </>
  );
};

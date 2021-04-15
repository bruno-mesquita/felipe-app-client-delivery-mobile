import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import CartButton from '../../../components/CartButton';
import { EstablishmentImage, Card } from '../../../components/Establishment';
import Tab from '../../../components/Tab';

import formatPrice from '../../../utils/format-number';
import api from '../../../services/api';
import {
  Container,
  Header,
  Divider,
  Content,
  EstablishmentDetail,
  EstablishmentDetailTitle,
  EstablishmentDetailInfo,
  styles,
  Flatlists,
} from './styles';
import { Establishment, Menu, Product } from './props';
import apiMock from './mock';

const EstablishmentScreen = ({ route: { params } }) => {
  const { colors } = useTheme();

  const [establishment, setEstablishment] = useState<Establishment>(null);
  const [menuSelected, setMenuSelected] = useState<number>(null);
  const [menus, setMenus] = useState<Menu[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getEstablishment = useCallback(async () => {
    try {
      const { data } = await apiMock.get(`/establishment/${params.id}`);

      setEstablishment(data.result);
    } catch (err) {
      Alert.alert('Erro ao recuperar os dados do estabelecimento');
    }
  }, []);

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
    getEstablishment();
    getMenus();
  }, [getEstablishment, getMenus]);

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
        <Header>
          <EstablishmentImage image={establishment?.image} />
          <EstablishmentDetail>
            <EstablishmentDetailTitle>
              {establishment?.name}
            </EstablishmentDetailTitle>
            <EstablishmentDetailInfo>
              <Text>Aberto</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>
                  {establishment?.fee ? formatPrice(establishment.fee) : null}
                </Text>
                <MaterialIcons name="motorcycle" size={25} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Text>{establishment?.rate}</Text>
                <MaterialIcons
                  name="star-half"
                  size={20}
                  color={colors.third}
                />
              </View>
            </EstablishmentDetailInfo>
          </EstablishmentDetail>
        </Header>
        <Divider />
        <Flatlists>
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
            contentContainerStyle={styles.listProducts}
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => (
              <Card {...item} establishmentId={params.id} />
            )}
          />
        </Flatlists>
      </Content>
      <CartButton />
    </Container>
  );
};

export default EstablishmentScreen;

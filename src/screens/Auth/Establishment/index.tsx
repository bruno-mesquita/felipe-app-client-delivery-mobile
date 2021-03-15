import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import CartButton from '../../../components/CartButton';
import { EstablishmentImage, Card } from '../../../components/Establishment';
import Tab from '../../../components/Tab';

import api from '../../../services/api';
import {
  Container,
  Header,
  Divider,
  Content,
  EstablishmentDetail,
  EstablishmentDetailTitle,
  EstablishmentDetailInfo,
} from './styles';
import { Establishment, Menu } from './props';
import apiMock from './mock';

const EstablishmentScreen = () => {
  const { id } = useRoute();
  const { colors } = useTheme();

  const [establishment, setEstablishment] = useState<Establishment>(null);
  const [loading, setLoading] = useState(true);
  const [menuSelected, setMenuSelected] = useState<string>('');
  const [menu, setMenu] = useState<Menu>(null);

  useEffect(() => {
    setTimeout(() => {
      apiMock.get(`/establishment/${id}`).then(data => {
        setEstablishment(data);
        setMenuSelected(data.menus[0].id);
        setMenu(data.menus[0]);
        setLoading(false);
      });
    }, 2000);
  }, []);

  const onPressMenu = (id: string) => {
    setMenuSelected(id);
    setMenu(establishment.menus.find(item => item.id === id));
  };

  return (
    <Container>
      <Content>
        <Header>
          <EstablishmentImage
            loading={loading}
            image={establishment?.image.encoded}
          />
          <EstablishmentDetail>
            <EstablishmentDetailTitle>
              {establishment?.name}
            </EstablishmentDetailTitle>
            <EstablishmentDetailInfo>
              <Text>Aberto</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>R${establishment?.fee}</Text>
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
        <SafeAreaView
          style={{
            justifyContent: 'flex-start',
            flex: 1,
          }}
        >
          <FlatList
            contentContainerStyle={{ paddingBottom: 10 }}
            showsHorizontalScrollIndicator={false}
            data={establishment?.menus.map(menu => ({
              id: menu.id,
              name: menu.name,
            }))}
            renderItem={({ item }) => (
              <Tab
                {...item}
                loading={loading}
                onPress={onPressMenu}
                selected={menuSelected}
              />
            )}
            horizontal
          />

          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              paddingTop: 20,
              paddingBottom: 50,
            }}
            showsVerticalScrollIndicator={false}
            data={menu?.products}
            renderItem={({ item }) => (
              <Card {...item} image={item.image.encoded} />
            )}
          />
        </SafeAreaView>
      </Content>
      <CartButton />
    </Container>
  );
};

export default EstablishmentScreen;

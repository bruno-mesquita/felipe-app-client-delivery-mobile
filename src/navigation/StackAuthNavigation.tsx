import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenAuthList } from '@utils/ScreenProps';

import {
  Home,
  Profile,
  Categories,
  ChangePassword,
  Adresses,
  AddAddress,
  Establishment,
  Cart,
  TrackOrder,
  Orders,
  UpdateAddress,
  Configuration,
  AboutApp,
  TermsUse,
  Deliveryman,
  Account
} from '../screens/Auth';

const { Navigator, Screen } = createStackNavigator<ScreenAuthList>();

const Header = () => (
  <Image
    style={{ width: 90, height: 43 }}
    source={require('../assets/images/logo.png')}
  />
);

const Menu = ({ openDrawer }) => (
  <MaterialIcons
    name="menu"
    size={25}
    color="#fff"
    style={{ paddingLeft: 10 }}
    onPress={openDrawer}
  />
);

const headerOptions = (name: string) =>
  ({
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#9E0404',
    },
    headerTitle: name,
    headerTintColor: '#ffffff',
  } as any);

export const StackAuthNavigation = ({ navigation }) => (
  // Começa com Categories
  <Navigator initialRouteName="Categories">
    <Screen
      name="Categories"
      component={Categories}
      options={{
        ...headerOptions(''),
        headerTitle: () => <Header />,
        headerLeft: () => <Menu openDrawer={navigation.openDrawer} />,
      }}
    />

    <Screen
      name="Home"
      component={Home}
      options={{
        ...headerOptions(''),
        headerTitle: () => <Header />,
        headerLeft: () => <Menu openDrawer={navigation.openDrawer} />,
      }}
    />
    <Screen
      name="Profile"
      component={Profile}
      options={headerOptions('Perfil')}
    />
    <Screen
      name="ChangePassword"
      component={ChangePassword}
      options={headerOptions('Alterar senha')}
    />
    <Screen
      name="Adresses"
      component={Adresses}
      options={headerOptions('Endereços')}
    />
    <Screen
      name="AddAddress"
      component={AddAddress}
      options={headerOptions('Adicionar endereço')}
    />
    <Screen
      name="UpdateAddress"
      component={UpdateAddress}
      options={headerOptions('Atualizar endereço')}
    />

    <Screen
      name="Establishment"
      component={Establishment}
      options={{ ...headerOptions(''), headerTitle: () => <Header /> }}
    />

    <Screen
      name="Deliverymans"
      component={Deliveryman}
      options={headerOptions('Motoboys')}
    />

    <Screen
      name="Cart"
      component={Cart}
      options={headerOptions('Carrinho')}
    />
    <Screen
      name="TrackOrder"
      component={TrackOrder}
      options={headerOptions('Acompanhar pedido')}
    />
    <Screen
      name="Orders"
      component={Orders}
      options={headerOptions('Pedidos')}
    />
    <Screen
      name="Configuration"
      component={Configuration}
      options={headerOptions('Configurações')}
    />
    <Screen
      name="TermsUse"
      component={TermsUse}
      options={headerOptions('Termos de uso')}
    />
    <Screen
      name="AboutApp"
      component={AboutApp}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Account"
      component={Account}
      options={headerOptions('Minha conta')}
    />

  </Navigator>
);

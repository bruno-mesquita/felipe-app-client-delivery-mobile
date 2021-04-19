import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Home,
  Profile,
  ChangePassword,
  Address,
  AddAddress,
  Establishment,
  Cart,
  TrackOrder,
  Orders,
  UpdateAddress,
  Configuration,
  AboutApp,
  TermsUse,
} from '../screens/Auth';

const { Navigator, Screen } = createStackNavigator();

const Header = () => (
  <Image
    style={{ width: 90, height: 43 }}
    source={require('../assets/images/logo.png')}
  />
);

// const Menu = () => <MaterialIcons name="menu" size={25} color="#fff" />;

export default function NativeStackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: () => <Header />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: 'Perfil',
          headerTintColor: '#ffffff',
        }}
      />
      <Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: 'Alterar senha',
          headerTintColor: '#ffffff',
        }}
      />
      <Screen
        name="Address"
        component={Address}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: 'Endereços',
          headerTintColor: '#ffffff',
        }}
      />
      <Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: 'Adicionar endereço',
          headerTintColor: '#ffffff',
        }}
      />
      <Screen
        name="UpdateAddress"
        component={UpdateAddress}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTitle: 'Atualizar endereço',
          headerTintColor: '#ffffff',
        }}
      />

      <Screen
        name="Establishment"
        component={Establishment}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: () => <Header />,
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: 'Carrinho',
        }}
      />
      <Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: 'Acompanhar pedido',
        }}
      />
      <Screen
        name="Orders"
        component={Orders}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: 'Pedidos',
        }}
      />
      <Screen
        name="Configuration"
        component={Configuration}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: 'Configurações',
        }}
      />
      <Screen
        name="TermsUse"
        component={TermsUse}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9E0404',
          },
          headerTintColor: '#ffffff',
          headerTitle: 'Termos de uso',
        }}
      />
      <Screen
        name="AboutApp"
        component={AboutApp}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import {
  Home,
  Profile,
  ChangePassword,
  Address,
  AddAddress,
  Establishment,
} from '../screens/Auth';

const { Navigator, Screen } = createStackNavigator();

const Header = () => (
  <Image
    style={{ width: 90, height: 43 }}
    source={require('../assets/images/logo.png')}
  />
);

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
          headerTitle: 'Cadastro de endereço',
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
    </Navigator>
  );
}

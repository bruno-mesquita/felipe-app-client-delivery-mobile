import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import { Home, Profile } from '../screens/Auth';

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
    </Navigator>
  );
}

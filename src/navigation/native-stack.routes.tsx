import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';

const { Navigator, Screen } = createStackNavigator();

export default function NativeStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}

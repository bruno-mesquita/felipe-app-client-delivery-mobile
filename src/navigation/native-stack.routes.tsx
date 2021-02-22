import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Profile from '../screens/profile';

const { Navigator, Screen } = createStackNavigator();

export default function NativeStackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}

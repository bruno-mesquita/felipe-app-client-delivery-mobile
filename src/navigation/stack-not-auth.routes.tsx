import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';

const { Navigator, Screen } = createStackNavigator();

export default function NavigationStackNotAuth() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}

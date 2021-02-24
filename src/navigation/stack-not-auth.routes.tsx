import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/login';
import Register from '../screens/Register';

const { Navigator, Screen } = createStackNavigator();

export default function NavigationStackNotAuth() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          /* cardStyle: { backgroundColor: '#f2f3f5' }, */
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}

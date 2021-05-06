import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Login,
  Register,
  CodeToPassword,
  CodeToRegister,
  ForgotPassword,
} from '@screens/NotAuth';
import { ScreenNotAuthList } from '@utils/ScreenProps';

const { Navigator, Screen } = createStackNavigator<ScreenNotAuthList>();

export const StackNotAuthNavigation = () => (
  <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <Screen
      name="CodeToRegister"
      component={CodeToRegister}
      options={{ headerShown: false }}
    />

    <Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
    <Screen
      name="CodeToPassword"
      component={CodeToPassword}
      options={{ headerShown: false }}
    />
  </Navigator>
);

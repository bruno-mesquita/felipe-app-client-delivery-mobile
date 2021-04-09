import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Register } from '../screens/NotAuth';
import CodeToRegister from '../screens/NotAuth/CodeToRegister';
import ForgotPassword from '../screens/NotAuth/ForgotPassword';
import CodeToPassword from '../screens/NotAuth/CodeToForgotPassword';
import ConfirmaPassword from '../screens/NotAuth/ConfirmPassword';

const { Navigator, Screen } = createStackNavigator();

export default function NavigationStackNotAuth() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Login" component={Login} />
        <Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Screen
          name="Code"
          component={CodeToRegister}
          options={{ headerShown: false }}
        />

        <Screen
          name="Forgotpassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Screen
          name="Codepassword"
          component={CodeToPassword}
          options={{ headerShown: false }}
        />
        <Screen name="Changeconfirmpassword" component={ConfirmaPassword} />
      </Navigator>
    </NavigationContainer>
  );
}

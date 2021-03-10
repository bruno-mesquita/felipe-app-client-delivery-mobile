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
        screenOptions={{
          headerShown: false,
          /* cardStyle: { backgroundColor: '#f2f3f5' }, */
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9E0404',
            },
            headerTitle: 'Cadastro',
            headerTintColor: '#fff',
          }}
        />
        <Screen
          name="Code"
          component={CodeToRegister}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9E0404',
            },
            headerTitle: 'Código de cadastro',
            headerTintColor: '#fff',
          }}
        />

        <Screen
          name="Forgotpassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9E0404',
            },
            headerTitle: 'Esqueci minha senha',
            headerTintColor: '#fff',
          }}
        />
        <Screen
          name="Codepassword"
          component={CodeToPassword}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9E0404',
            },
            headerTitle: 'Código de trocar senha',
            headerTintColor: '#fff',
          }}
        />
        <Screen name="Changeconfirmpassword" component={ConfirmaPassword} />
      </Navigator>
    </NavigationContainer>
  );
}

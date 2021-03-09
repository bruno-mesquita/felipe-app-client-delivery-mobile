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
        <Screen name="Register" component={Register} />
        <Screen name="Code" component={CodeToRegister} />

        <Screen
          name="Forgotpassword"
          component={ForgotPassword}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#9E0404',
            },
            headerTitle: 'Esqueci minha senha',
            headerTintColor: '#fff',
          }}
        />
        <Screen name="Codepassword" component={CodeToPassword} />
        <Screen name="Changeconfirmpassword" component={ConfirmaPassword} />
      </Navigator>
    </NavigationContainer>
  );
}

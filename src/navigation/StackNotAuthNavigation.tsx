import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Login,
  Register,
  CodeToPassword,
  ForgotPassword,
} from '@screens/NotAuth';
import { TermsUse } from '@screens/TermsUse';
import { ScreenNotAuthList } from '@utils/ScreenProps';

const { Navigator, Screen } = createStackNavigator<ScreenNotAuthList>();

export const StackNotAuthNavigation = () => (
  <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={Register} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
    <Screen name="CodeToPassword" component={CodeToPassword} />
    <Screen name="TermsUse" component={TermsUse} />
  </Navigator>
);

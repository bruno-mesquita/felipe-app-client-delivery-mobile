import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NativeStackRoutes from './native-stack.routes';
import Drawer from '../components/Drawer';

const { Navigator, Screen } = createDrawerNavigator();

export default function drawerRoutes() {
  return (
    <NavigationContainer>
      <Navigator drawerContent={props => <Drawer {...props} />}>
        <Screen name="Home" component={NativeStackRoutes} />
      </Navigator>
    </NavigationContainer>
  );
}

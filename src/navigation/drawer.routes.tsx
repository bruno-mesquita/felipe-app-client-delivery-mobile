import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NativeStackRoutes from './native-stack.routes';

const Drawer = createDrawerNavigator();

export default function drawerRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={NativeStackRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

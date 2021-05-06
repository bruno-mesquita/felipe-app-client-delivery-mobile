import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackAuthNavigation } from './StackAuthNavigation';
import { Drawer } from '../components/Drawer';

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Navigator drawerContent={props => <Drawer {...props} />}>
    <Screen name="Home" component={StackAuthNavigation} />
  </Navigator>
);

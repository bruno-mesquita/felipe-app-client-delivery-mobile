import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackAuthNavigation } from './StackAuthNavigation';
import { Drawer } from '../components/Drawer';

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerNavigation = () => (
  <Navigator screenOptions={{ headerShown: false }} drawerContent={props => <Drawer {...props} />}>
    <Screen name="Home" component={StackAuthNavigation} />
  </Navigator>
);

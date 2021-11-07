import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';

const Navigation = () => {
  const { logged } = useSelector(({ auth }) => auth);

  return (
    <NavigationContainer>
      {logged ? <DrawerNavigation /> : <StackNotAuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;

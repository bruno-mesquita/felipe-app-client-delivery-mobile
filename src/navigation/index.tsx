import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';
import { useAuth } from '@contexts/AuthContext';

const Navigation = () => {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? <DrawerNavigation /> : <StackNotAuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;

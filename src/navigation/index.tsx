import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@contexts/AuthContext';
import { Notifications } from '@components';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';

const Navigation = () => {
  const { signed } = useAuth();

  return (
    <NavigationContainer>
      {signed ? (
        <>
          <DrawerNavigation />
          <Notifications />
        </>
      ) : (
        <StackNotAuthNavigation />
      )}
    </NavigationContainer>
  );
};

export default Navigation;

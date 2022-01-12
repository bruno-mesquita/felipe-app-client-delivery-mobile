import { NavigationContainer } from '@react-navigation/native';

import { Notifications } from '@components';
import { useAppSelector } from '@store/hooks';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';

const Navigation = () => {
  const signed = useAppSelector(({ auth }) => auth.signed);

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

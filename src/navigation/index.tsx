import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { Notifications } from '@components';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';

const Navigation = () => {
  const signed = useSelector(({ auth }) => auth.signed);

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

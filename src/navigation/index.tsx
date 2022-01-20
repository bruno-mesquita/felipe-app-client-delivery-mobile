import { NavigationContainer } from '@react-navigation/native';

import { useAppSelector } from '@store/hooks';

import { DrawerNavigation } from './DrawerNavigation';
import { StackNotAuthNavigation } from './StackNotAuthNavigation';

const Navigation = () => {
  const signed = useAppSelector(({ auth }) => auth.signed);

  return (
    <NavigationContainer>
      {signed ? <DrawerNavigation /> : <StackNotAuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;

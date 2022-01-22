import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Fab, Icon } from 'native-base';

import { useAppSelector } from '@store/hooks';

export const CartButton = () => {
  const navigation = useNavigation();
  const cartEmpty = useAppSelector(({ cart }) => cart.items.length === 0);

  return (
    <>
      {!cartEmpty && (
        <Fab
          bg="#9E0404"
          onPress={() => navigation.navigate('Cart')}
          position="absolute"
          size="sm"
          icon={
            <Icon
              color="white"
              as={<Ionicons name="cart-outline" />}
              size="sm"
            />
          }
        />
      )}
    </>
  );
};

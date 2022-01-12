import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { NavigationAuthHook } from '@utils/ScreenProps';
import { useAppSelector } from '@store/hooks';

import { ButtonAdd } from './styles';

export const CartButton = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationAuthHook<any>>();
  const cartEmpty = useAppSelector(({ cart }) => cart.items.length === 0);

  return (
    <>
      {!cartEmpty && (
        <ButtonAdd onPress={() => navigation.navigate('Cart')}>
          <Text>
            <Ionicons name="cart-outline" size={30} color={colors.secundary} />
          </Text>
        </ButtonAdd>
      )}
    </>
  );
};

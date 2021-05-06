import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { NavigationAuthHook } from '@utils/ScreenProps';

import { ButtonAdd } from './styles';

export const CartButton = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationAuthHook<any>>();

  const goCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <ButtonAdd onPress={goCart}>
      <Text>
        <Ionicons name="cart-outline" size={30} color={colors.secundary} />
      </Text>
    </ButtonAdd>
  );
};

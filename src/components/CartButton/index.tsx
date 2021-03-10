import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ButtonAdd } from './styles';

const CartButton = () => {
  const { colors } = useTheme();

  return (
    <ButtonAdd>
      <Text>
        <Ionicons name="cart-outline" size={30} color={colors.secundary} />
      </Text>
    </ButtonAdd>
  );
};

export default CartButton;

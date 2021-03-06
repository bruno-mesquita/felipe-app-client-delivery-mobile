import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, ButtonAdd, Empty } from './styles';

const Address = () => {
  const { colors } = useTheme();
  const { adresses } = useSelector(({ user }) => user.profile);

  return (
    <Container>
      {adresses.length === 0 ? (
        <Empty>
          <Ionicons name="location-sharp" size={150} color={colors.primary} />
          <Text style={{ fontSize: 20, marginTop: 20 }}>Sem endereços</Text>
        </Empty>
      ) : (
        <Text>Erro</Text>
      )}
      <ButtonAdd>
        <Text>
          <Ionicons name="add" size={30} color={colors.secundary} />
        </Text>
      </ButtonAdd>
    </Container>
  );
};

export default Address;

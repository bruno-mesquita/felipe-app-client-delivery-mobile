import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

interface NotFoundProps {
  refreshing: boolean;
}

export const NotFound = ({ refreshing }: NotFoundProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      {refreshing ? (
        <ActivityIndicator size={60} color={colors.primary} />
      ) : (
        <>
          <MaterialCommunityIcons name="flask-empty-minus-outline" size={100} />
          <Text>Sem resultado</Text>
        </>
      )}
    </Container>
  );
};

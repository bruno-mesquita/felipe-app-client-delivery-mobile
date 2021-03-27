import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';

interface NotFoundProps {
  loading: boolean;
}

export const NotFound = ({ loading }: NotFoundProps) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator size={80} color="#000" />
      ) : (
        <>
          <MaterialCommunityIcons name="flask-empty-minus-outline" size={100} />
          <Text>Sem resultado</Text>
        </>
      )}
    </Container>
  );
};

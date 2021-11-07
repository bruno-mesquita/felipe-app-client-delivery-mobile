import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';

export const NotFound = () => {
  return (
    <Container>
      <MaterialCommunityIcons name="flask-empty-minus-outline" size={100} />
      <Text>Sem resultado</Text>
    </Container>
  );
};

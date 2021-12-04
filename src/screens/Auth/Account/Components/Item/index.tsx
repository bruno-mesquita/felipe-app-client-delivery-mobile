import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Text } from './styles';
import { ItemProps } from './props';

export const Item = ({ children, onPress, loading = false }: ItemProps) => (
  <Container onPress={onPress}>
    <Text>{children}</Text>
    {loading ? <ActivityIndicator size={25} color="#000" /> : <MaterialIcons name="keyboard-arrow-right" size={25} />}
  </Container>
);

import { TouchableOpacity, Text } from 'react-native';

import { Container, Card } from './styles';
import { CategoryCardProps } from './props';

export const CategoryCard = ({ name, children, onClick, disabled }: CategoryCardProps) => (
  <Container>
    <TouchableOpacity disabled={!disabled} onPress={onClick}>
      <Card disabled={!disabled}>{children}</Card>
    </TouchableOpacity>
    <Text>{name}</Text>
  </Container>
);

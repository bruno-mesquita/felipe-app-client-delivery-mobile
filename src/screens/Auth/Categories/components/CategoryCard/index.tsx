import { TouchableOpacity, Text } from 'react-native';

import { Container, Card } from './styles';
import { CategoryCardProps } from './props';

export const CategoryCard = ({ name, children, onClick }: CategoryCardProps) => (
  <Container>
    <TouchableOpacity onPress={onClick}>
      <Card>{children}</Card>
    </TouchableOpacity>
    <Text>{name}</Text>
  </Container>
);

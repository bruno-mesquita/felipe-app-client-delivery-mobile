import { TouchableOpacity, Text } from 'react-native';

import { Container, DivCard, Card } from './styles';
import { CategoryCardProps } from './props';

export const CategoryCard = ({ name, children, onClick, disabled }: CategoryCardProps) => (
  <Container>
    <DivCard>
      <TouchableOpacity disabled={!disabled} onPress={onClick}>
        <Card disabled={!disabled}>{children}</Card>
      </TouchableOpacity>
      <Text>{name}</Text>
    </DivCard>
  </Container>
);

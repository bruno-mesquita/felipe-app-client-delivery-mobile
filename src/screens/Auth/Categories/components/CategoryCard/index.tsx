import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Container, DivCard, Card } from './styles';
import { CategoryCardProps } from './props';

export const CategoryCard = ({ name, children, onClick }: CategoryCardProps) => (
  <Container>
    <DivCard>
      <TouchableOpacity onPress={onClick}>
        <Card>{children}</Card>
      </TouchableOpacity>
      <Text>{name}</Text>
    </DivCard>
  </Container>
);

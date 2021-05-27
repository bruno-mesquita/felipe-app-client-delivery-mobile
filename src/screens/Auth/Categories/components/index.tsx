import React from 'react';

import { Container, DivContainer, DivCard, Button, Card, Text } from './styles';

interface Props {
  name: string;
  children: any;
  onClick: any;
}

export const CategoriesCards = ({ name, children, onClick }: Props) => {
  return (
    <Container>
      <DivContainer>
        <DivCard>
          <Button onPress={onClick}>
            <Card>{children}</Card>
          </Button>
          <Text>{name}</Text>
        </DivCard>
      </DivContainer>
    </Container>
  );
};

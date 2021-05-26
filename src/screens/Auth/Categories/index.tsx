import React from 'react';
import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
} from '@expo/vector-icons';

import { Container, DivContainer, DivCard, Button, Card, Text } from './styles';

export const Categories = () => {
  return (
    <Container>
      <DivContainer>
        <DivCard>
          <Button>
            <Card>
              <FontAwesome5 name="hamburger" size={50} color="#fff" />
            </Card>
          </Button>
          <Text>Restaurantes</Text>
        </DivCard>

        <DivCard>
          <Card>
            <AntDesign name="shoppingcart" size={50} color="#fff" />
          </Card>
          <Text>Mercados</Text>
        </DivCard>

        <DivCard>
          <Card>
            <MaterialCommunityIcons name="medical-bag" size={50} color="#fff" />
          </Card>
          <Text>Farmácias</Text>
        </DivCard>
      </DivContainer>

      <DivContainer>
        <DivCard>
          <Card>
            <FontAwesome5 name="candy-cane" size={50} color="#fff" />
          </Card>
          <Text>Conveniências</Text>
        </DivCard>

        <DivCard>
          <Card>
            <Fontisto name="shopping-store" size={50} color="#fff" />
          </Card>
          <Text>Lojas</Text>
        </DivCard>

        <DivCard>
          <Card>
            <Entypo name="drink" size={50} color="#fff" />
          </Card>
          <Text>Butecos</Text>
        </DivCard>
      </DivContainer>
    </Container>
  );
};

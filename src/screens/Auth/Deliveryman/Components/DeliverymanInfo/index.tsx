import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { RouteAuthHook } from '@utils/ScreenProps';

import {
  Container,
  EstablishmentDetailTitle,
  EstablishmentDetailInfo,
  Row,
  Header,
} from './styles';

export const DeliverymanInfo = () => {
  const { name, cellphone, entry_date, departure_date } = useRoute<
    RouteAuthHook<'Deliverymans'>
  >().params;

  return (
    <Container>
      <Header>
        <EstablishmentDetailTitle>{name}</EstablishmentDetailTitle>
        <EstablishmentDetailInfo>
          <Text>Disponível</Text>
          <Row>
            <Text>{cellphone}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Row>
          <Text>{entry_date}</Text>
          <Text>{departure_date}</Text>
        </EstablishmentDetailInfo>
      </Header>
    </Container>
  );
};

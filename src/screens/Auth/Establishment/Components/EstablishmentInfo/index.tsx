import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import formatPrice from '@utils/format-number';

import {
  Container,
  EstablishmentDetailTitle,
  EstablishmentDetailInfo,
  Row,
  Header,
} from './styles';

export const EstablishmentInfo = () => {
  const { colors } = useTheme();
  const { image, name, fee, rate = 0 } = useRoute().params as any;

  return (
    <Container>
      <Image
        source={{ uri: image }}
        style={{ height: 90, width: 90, borderRadius: 100 }}
      />
      <Header>
        <EstablishmentDetailTitle>{name}</EstablishmentDetailTitle>
        <EstablishmentDetailInfo>
          <Text>Aberto</Text>
          <Row>
            <Text>{fee ? formatPrice(fee) : null}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Row>
          <Row style={{ alignItems: 'baseline' }}>
            <Text>{rate ? rate : null}</Text>
            <MaterialIcons name="star-half" size={20} color={colors.third} />
          </Row>
        </EstablishmentDetailInfo>
      </Header>
    </Container>
  );
};

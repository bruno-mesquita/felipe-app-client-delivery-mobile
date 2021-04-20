import React, { useCallback, useState, useEffect } from 'react';
import { Alert, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import formatPrice from '../../../../../utils/format-number';
import api from '../../../../../services/api';

import {
  Container,
  EstablishmentDetailTitle,
  EstablishmentDetailInfo,
  Row,
  Header,
} from './styles';
import { Establishment } from './props';
import apiMock from '../../mock';

export const EstablishmentInfo = ({ id }) => {
  const { colors } = useTheme();

  const [establishment, setEstablishment] = useState<Establishment>(null);

  const getEstablishment = useCallback(async () => {
    try {
      const { data } = await apiMock.get(`/establishment/${id}`);

      setEstablishment(data.result);
    } catch (err) {
      Alert.alert('Erro ao recuperar os dados do estabelecimento');
    }
  }, []);

  useEffect(() => {
    getEstablishment();
  }, [getEstablishment]);

  return (
    <Container>
      <Image
        source={establishment?.image}
        style={{ height: 90, width: 90, borderRadius: 100 }}
      />
      <Header>
        <EstablishmentDetailTitle>
          {establishment?.name}
        </EstablishmentDetailTitle>
        <EstablishmentDetailInfo>
          <Text>Aberto</Text>
          <Row>
            <Text>
              {establishment?.fee ? formatPrice(establishment.fee) : null}
            </Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Row>
          <Row style={{ alignItems: 'baseline' }}>
            <Text>{establishment?.rate}</Text>
            <MaterialIcons name="star-half" size={20} color={colors.third} />
          </Row>
        </EstablishmentDetailInfo>
      </Header>
    </Container>
  );
};

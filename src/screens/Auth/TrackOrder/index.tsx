import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

const lineOne = require('../../../assets/images/line_01.png');
const lineTwo = require('../../../assets/images/line_02.png');
const lineThree = require('../../../assets/images/line_03.png');
const lineFour = require('../../../assets/images/line_04.png');

const way = require('../../../assets/images/a_caminho.png');
const wait = require('../../../assets/images/esperando.png');
const accept = require('../../../assets/images/pedido_aceito.png');
const delivered = require('../../../assets/images/pedido_entregue.png');

import { getApi } from '@services/api';
import { Container, Status, Icon, Title } from './styles';
import { Alert } from 'react-native';

export const TrackOrder = () => {
  const { id } = useRoute().params as { id: string };

  const [images] = useState([lineOne, lineTwo, lineThree, lineFour]);
  const [icons] = useState([accept, wait, way, delivered]);
  const [status] = useState([
    'Aceito',
    'Em preparo',
    'Saiu para entrega',
    'Entregue',
  ]);
  const [active, setActive] = useState(0);
  const [finish, setFinish] = useState(false);
  const [func, setFunc] = useState(null);

  const nextActive = (value: string) => {
    setActive(old => {
      const index = status.findIndex(s => value);

      if (old !== 3) {
        return index;
      }
      clearInterval(func);
      setFinish(true);
      return old;
    });
  };

  const verifyStatus = async () => {
    try {
      if (!finish) {
        const api = getApi();
        const { data } = await api.get(`/orders/${id}/verify`);

        console.log(id);

        nextActive(data.result);
      }
    } catch (err) {
      Alert.alert('Erro', 'Houve um erro ao atualizar o status do seu pedido');
    }
  };

  useEffect(() => {
    const funcInterval = setInterval(verifyStatus, 2000);

    setFunc(funcInterval);

    return () => clearInterval(funcInterval);
  }, []);

  return (
    <Container>
      <Status source={images[active]} resizeMode="contain" />
      <Icon source={icons[active]} resizeMode="contain" />
      <Title>{status[active]}</Title>
    </Container>
  );
};

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

import api from '../../../services/api';
import { Container, Status, Icon, Title } from './styles';

export const TrackOrder = () => {
  const { id } = useRoute().params as { id: string };

  const [images] = useState([lineOne, lineTwo, lineThree, lineFour]);
  const [icons] = useState([accept, wait, way, delivered]);
  const [texts] = useState([
    'Pedido aceito',
    'Em preparo',
    'A caminho',
    'Entregue',
  ]);
  const [active, setActive] = useState(0);
  const [finish, setFinish] = useState(false);
  const [func, setFunc] = useState(null);

  const nextActive = () => {
    setActive(old => {
      if (old !== 3) {
        return old + 1;
      }
      clearInterval(func);
      setFinish(true);
      return old;
    });
  };

  const verifyStatus = async () => {
    try {
      if (!finish) {
        console.log('entrei');
        /* const response = await api.get(`/orders/${id}`); */

        nextActive();
      }
    } catch (err) {
      // Colocar um toast aqui
    }
  };

  useEffect(() => {
    setFunc(setInterval(verifyStatus, 2000));
  }, []);

  return (
    <Container>
      <Status source={images[active]} resizeMode="contain" />
      <Icon source={icons[active]} resizeMode="contain" />
      <Title>{texts[active]}</Title>
    </Container>
  );
};

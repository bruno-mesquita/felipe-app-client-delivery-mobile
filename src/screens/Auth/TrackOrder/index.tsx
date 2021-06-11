import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';

const lineOne = require('../../../assets/images/line_01.png');
const lineTwo = require('../../../assets/images/line_02.png');
const lineThree = require('../../../assets/images/line_03.png');
const lineFour = require('../../../assets/images/line_04.png');

const way = require('../../../assets/images/a_caminho.png');
const wait = require('../../../assets/images/esperando.png');
const accept = require('../../../assets/images/pedido_aceito.png');
const delivered = require('../../../assets/images/pedido_entregue.png');

import { clearCart } from '../../../store/ducks/cart/cart.actions';
import { ScreenAuthProps } from '@utils/ScreenProps';
import { getApi } from '@services/api';
import { Container, Status, Icon, Title } from './styles';
import { Alert } from 'react-native';

export const TrackOrder = ({
  navigation,
  route: {
    params: { id, clear = false },
  },
}: ScreenAuthProps<'TrackOrder'>) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const [images] = useState([lineOne, lineTwo, lineThree, lineFour]);
  const [icons] = useState([wait, accept, way, delivered]);
  const [status] = useState([
    'Enviado',
    'Aceito',
    'Em preparo',
    'Saiu para entrega',
  ]);
  const [active, setActive] = useState(0);
  const [finish, setFinish] = useState(false);
  const [func, setFunc] = useState(null);
  const [loading, setLoading] = useState(true);

  const nextActive = (value: string) => {
    setActive(old => {
      const index = status.findIndex(s => s === value);

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

        if (data.result === 'Entregue' || data.result === 'Cancelado') {
          navigation.goBack();
        } else {
          nextActive(data.result);
          setLoading(false);
        }
      }
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Houve um erro ao atualizar o status do seu pedido');
    }
  };

  useEffect(() => {
    verifyStatus();

    if (clear) dispatch(clearCart());

    const funcInterval = setInterval(verifyStatus, 8000);

    setFunc(funcInterval);

    return () => clearInterval(funcInterval);
  }, [clear, dispatch]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color={colors.primary} size={50} />
      ) : (
        <>
          <Status source={images[active]} resizeMode="contain" />
          {icons[active] ? (
            <Icon source={icons[active]} resizeMode="contain" />
          ) : null}
          <Title>{status[active]}</Title>
        </>
      )}
    </Container>
  );
};

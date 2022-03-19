import { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler } from 'react-native';
import { useToast, Flex, Image, Text } from 'native-base';

import { cartActions } from '@store/reducers/cart';
import { useAppDispatch } from '@store/hooks';
import { ScreenAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

const lineOne = require('../../../assets/images/line_01.png');
const lineTwo = require('../../../assets/images/line_02.png');
const lineThree = require('../../../assets/images/line_03.png');
const lineFour = require('../../../assets/images/line_04.png');

const way = require('../../../assets/images/a_caminho.png');
const wait = require('../../../assets/images/esperando.png');
const accept = require('../../../assets/images/pedido_aceito.png');
const delivered = require('../../../assets/images/pedido_entregue.png');

const images = [lineOne, lineTwo, lineThree, lineFour];
const icons = [wait, accept, way, delivered];
const status = ['Enviado', 'Aceito', 'Em preparo', 'Saiu para entrega'];

export const TrackOrder = ({
  navigation,
  route: {
    params: { id, clear = false },
  },
}: ScreenAuthProps<'TrackOrder'>) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

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
        const { data } = await api.get(`/orders/${id}/verify`);

        if (data.result === 'Entregue' || data.result === 'Cancelado') {
          navigation.goBack();
        } else {
          nextActive(data.result === 'Novo' ? 'Enviado' : data.result);
        }
      }
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Error!',
        description: 'Houve um erro ao atualizar o status do seu pedido',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyStatus();

    if (clear) dispatch(cartActions.clear());

    const funcInterval = setInterval(verifyStatus, 8000);

    setFunc(funcInterval);

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Orders');
        return true;
      }
    );

    return () => {
      backHandler.remove();
      clearInterval(funcInterval);
    };
  }, [clear, dispatch, navigation]);

  return (
    <Flex flex={1} justify="center" align="center">
      {loading ? (
        <ActivityIndicator color="#9E0404" size={50} />
      ) : (
        <>
          <Image w="100%" source={images[active]} resizeMode="contain" />
          {icons[active] ? (
            <Image w="70%" source={icons[active]} resizeMode="contain" />
          ) : null}
          <Text>{status[active]}</Text>
        </>
      )}
    </Flex>
  );
};

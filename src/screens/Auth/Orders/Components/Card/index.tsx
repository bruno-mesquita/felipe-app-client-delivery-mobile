import React, { useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { useSelectedOrder } from '@contexts/OrderContext';
import { CardBase } from '@components';
import formatPrice from '@utils/format-number';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { Props } from './props';
import { Container, Row } from './styles';
import { StarIcon } from '../StarIcon';

export const Card = ({
  establishment: { name },
  id,
  evaluation,
  createdAt,
  total,
  order_status,
  modalInfoRef,
  modalRateRef,
}: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Orders'>>();
  const { setSelectedItem } = useSelectedOrder();

  const formattedDate = (value: string) => {
    return format(parseISO(value), 'dd/MM/yyyy - HH:mm');
  };

  const openModalRateOrTrack = useCallback(() => {
    if (order_status === 'Aberto' || order_status === 'Em andamento') {
      navigation.navigate('TrackOrder', { id });
    } else {
      setSelectedItem({
        orderId: id,
        evaluationId: evaluation ? evaluation.id : null,
      });
      modalRateRef.current?.open();
    }
  }, []);

  const openModalInfo = useCallback(() => {
    setSelectedItem({ orderId: id, evaluationId: null });
    modalInfoRef.current?.open();
  }, []);

  const Rate = () => {
    if (order_status === 'Aberto' || order_status === 'Em andamento')
      return <Text style={{ color: `#FA7B14`, fontSize: 15 }}>Acompanhar</Text>;

    if (!evaluation) return <Text style={{ color: `#03670D`, fontSize: 16 }}>Avaliar</Text>;

    if (evaluation) return <StarIcon rate={evaluation?.value} />;
  };

  return (
    <CardBase onPress={openModalInfo}>
      <Container>
        <Row>
          <View style={{ width: '70%' }}>
            <Text>{name}</Text>
          </View>
          <Text>{formatPrice(total)}</Text>
        </Row>
        <Row>
          <Text>{formattedDate(createdAt)}</Text>
          <TouchableOpacity onPress={openModalRateOrTrack}>
            <Rate />
          </TouchableOpacity>
        </Row>
      </Container>
    </CardBase>
  );
};

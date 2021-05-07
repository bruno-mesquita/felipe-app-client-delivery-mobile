import React, { useRef, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { CardBase } from '@components';
import formatPrice from '@utils/format-number';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { ModalBaseHandle } from '../../../../../components/ModalBase/props';
import { Props } from './props';
import { Container, Row } from './styles';
import { EvaluationModal } from '../EvaluationModal';
import { OrderInfoModal } from '../OrderInfoModal';
import { StarIcon } from '../StarIcon';

export const Card = ({
  establishment: { name },
  id,
  evaluation,
  createdAt,
  total,
  order_status,
}: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Orders'>>();

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

  const formattedDate = (value: string) => {
    return format(parseISO(value), 'dd/MM/yyyy - HH:mm');
  };

  const openModalRateOrTrack = useCallback(() => {
    if (order_status === 'Aberto' || order_status === 'Em andamento') {
      navigation.navigate('TrackOrder', { id });
    } else {
      modalInfoRef.current?.open();
    }
  }, [id]);

  const openModalInfo = useCallback(() => {
    modalInfoRef.current?.open();
  }, [id]);

  const Rate = () => {
    if (order_status === 'Aberto' || order_status === 'Em andamento')
      return <Text>Acompanhar</Text>;

    if (!evaluation) return <Text>Avaliar</Text>;

    if (evaluation) return <StarIcon rate={evaluation} />;
  };

  return (
    <>
      <EvaluationModal modalRef={modalRateRef} orderId={id} rate={evaluation} />
      <OrderInfoModal modalRef={modalInfoRef} orderId={id} />
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
    </>
  );
};

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

export const Card = ({ name, id, avaliation, date, total, active }: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Orders'>>();

  const modalRateRef = useRef<ModalBaseHandle>(null);
  const modalInfoRef = useRef<ModalBaseHandle>(null);

  const formattedDate = () => {
    return format(parseISO(date), 'dd/MM/yyyy - HH:mm');
  };

  const openModalRate = useCallback(() => {
    modalRateRef.current?.open();
  }, []);

  const openModalInfo = useCallback(() => {
    if (active) {
      navigation.navigate('TrackOrder', { id });
    } else {
      modalInfoRef.current?.open();
    }
  }, [id]);

  const Rate = () => {
    if (active) return <Text>Acompanhar</Text>;

    if (!avaliation) return <Text>Avaliar</Text>;

    if (avaliation) return <StarIcon rate={avaliation} />;
  };

  return (
    <>
      <EvaluationModal modalRef={modalRateRef} orderId={id} rate={avaliation} />
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
            <Text>{formattedDate()}</Text>
            <TouchableOpacity onPress={openModalRate}>
              <Rate />
            </TouchableOpacity>
          </Row>
        </Container>
      </CardBase>
    </>
  );
};

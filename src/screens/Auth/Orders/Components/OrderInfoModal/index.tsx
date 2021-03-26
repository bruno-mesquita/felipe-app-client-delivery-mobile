import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AxiosError } from 'axios';

import ModalBase from '../../../../../components/ModalBase';

import api from '../../../../../services/api';
import { Container } from './styles';
import { OrderInfoProps } from './props';

export const OrderInfoModal = ({ modalRef, orderId }: OrderInfoProps) => {
  const [order, setOrder] = useState<any>();

  useEffect(() => {
    // api.get(`/orders/${orderId}`)
    setOrder({});
  }, []);

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <ModalBase ref={modalRef}>
      <Container></Container>
    </ModalBase>
  );
};

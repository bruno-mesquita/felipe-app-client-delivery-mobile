import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AxiosError } from 'axios';

import { ModalBase, Button } from '@components';
import { getApi } from '@services/api';

import { Container } from './styles';
import { OrderInfoProps } from './props';

export const OrderInfoModal = ({ modalRef, orderId }: OrderInfoProps) => {
  const [order, setOrder] = useState<any>();

  useEffect(() => {
    const api = getApi();
    // api.get(`/orders/${orderId}`)
    setOrder({});
  }, []);

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <ModalBase ref={modalRef}>
      <Container>
        <Button onPress={onClose}>Fechar</Button>
      </Container>
    </ModalBase>
  );
};

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AxiosError } from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import ModalBase from '../../../../../components/ModalBase';

import api from '../../../../../services/api';
import { Container, Header } from './styles';
import { OrderInfoProps } from './props';

export const OrderInfoModal = ({ modalRef, orderId }: OrderInfoProps) => {
  const { colors } = useTheme();
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
      <Container>
        <Header>
          <Ionicons
            onPress={onClose}
            name="close-circle"
            size={20}
            color={colors.primary}
          />
        </Header>
      </Container>
    </ModalBase>
  );
};

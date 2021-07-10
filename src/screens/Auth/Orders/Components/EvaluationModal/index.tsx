import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { FormControl, TextArea } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { useSelectedOrder } from '@contexts/OrderContext';
import { ModalBase, ModalButton } from '@components';
import { getApi } from '@services/api';

import { Container, Header } from './styles';
import { EvaluationProps } from './props';

export const EvaluationModal = ({ modalRef }: EvaluationProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { selectedItem } = useSelectedOrder();

  const [rate, setRate] = useState({ value: 0, message: '' });

  const getRate = useCallback(async () => {
    try {
      const api = getApi();

      const { data } = await api.get(`/rates/${selectedItem.evaluationId}`);

      setRate(data.result);
    } catch (err) {
      navigation.goBack();
    }
  }, [selectedItem]);

  useEffect(() => {
    getRate();
  }, [getRate]);

  const onFinishRating = (value: number) => {
    setRate(old => ({ ...old, value: value }));
  };

  const onChangeTextArea = (value: string) => {
    setRate(old => ({ ...old, message: value }));
  };

  const onClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const evaluate = async () => {
    try {
      const api = getApi();

      await api.post(`/orders/${selectedItem.orderId}/rate`, rate);

      modalRef.current?.close();
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
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
        <FormControl>
          <TextArea
            padding={10}
            numberOfLines={5}
            value={rate?.message}
            placeholder="Faça uma avaliação do seu pedido"
            border="1px solid #c4c4c4"
            isDisabled={!!rate?.value}
            onChangeText={onChangeTextArea}
          />
        </FormControl>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 10,
          }}
        >
          <AirbnbRating
            size={20}
            showRating={false}
            defaultRating={rate?.value || 0}
            onFinishRating={onFinishRating}
          />
          {!selectedItem.evaluationId ? (
            <ModalButton onPress={evaluate}>Avaliar</ModalButton>
          ) : null}
        </View>
      </Container>
    </ModalBase>
  );
};

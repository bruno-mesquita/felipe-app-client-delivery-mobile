import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Form, Textarea } from 'native-base';
import { AxiosError } from 'axios';
import { useTheme } from 'styled-components/native';

import { ModalBase, ModalButton } from '@components';
import { getApi } from '@services/api';

import { Container } from './styles';
import { EvaluationProps } from './props';

export const EvaluationModal = ({
  modalRef,
  orderId,
  rate,
}: EvaluationProps) => {
  const { colors } = useTheme();

  const [form, setForm] = useState({ rate, text: '' });

  useEffect(() => {
    if (!rate) {
      // api
    }
  }, []);

  const onFinishRating = (value: number) => {
    setForm(old => ({ ...old, rate: value }));
  };

  const onChangeTextArea = (value: string) => {
    setForm(old => ({ ...old, text: value }));
  };

  const onClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  const evaluate = async () => {
    try {
      /* await api.post(`/orders/${orderId}/rate`, { value }); */

      modalRef.current?.close();
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  };

  return (
    <ModalBase ref={modalRef}>
      <Container>
        <Form>
          <Textarea
            rowSpan={5}
            value={form.text}
            placeholder="Faça uma avaliação do seu pedido"
            bordered
            disabled={!!form.rate}
            onChangeText={onChangeTextArea}
          />
        </Form>
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
            defaultRating={0}
            onFinishRating={onFinishRating}
          />
          {!form.rate ? (
            <ModalButton onPress={evaluate}>Avaliar</ModalButton>
          ) : null}
        </View>
      </Container>
    </ModalBase>
  );
};

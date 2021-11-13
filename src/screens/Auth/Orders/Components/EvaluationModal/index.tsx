import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { FormControl, TextArea } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { useSelectedOrder } from '@contexts/OrderContext';
import { ModalBase, ModalButton } from '@components';
import api from '@services/api';

import { Container, Header } from './styles';
import { EvaluationProps } from './props';

export const EvaluationModal = ({ modalRef }: EvaluationProps) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { selectedItem } = useSelectedOrder();

  const [rate, setRate] = useState({ value: 0, message: '' });

  useEffect(() => {
    api.get(`/rates/${selectedItem.evaluationId}`).then(({ data }) => setRate(data.result))
    .catch(() => navigation.goBack());
  }, [selectedItem]);

  const onFinishRating = (value: number) => {
    setRate(old => ({ ...old, value: value }));
  };

  const onChangeTextArea = (value: string) => {
    setRate(old => ({ ...old, message: value }));
  };

  const evaluate = () => {
    api.post(`/orders/${selectedItem.orderId}/rate`, rate).then(() => {
      modalRef.current?.close();
    })
  };

  return (
    <ModalBase ref={modalRef}>
      <Container>
        <Header>
          <Ionicons
            onPress={() => modalRef.current?.close()}
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

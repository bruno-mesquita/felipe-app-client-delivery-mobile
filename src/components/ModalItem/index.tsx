import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ModalBase } from '../ModalBase';
import { ModalButton } from '../ModalButton';

import { addItem } from '@store/ducks/cart/cart.actions';
import formatNumber from '@utils/format-number';
import { ModalItemProps } from './props';
import {
  PlusOrMin,
  Prices,
  ProductInfo,
  ViewTexts,
  Title,
  Description,
  Header,
  Content,
} from './styles';

export const ModalItem = ({ modalRef, ...rest }: ModalItemProps) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setTotal(rest.price);
  }, [rest.price]);

  const plus = () => {
    setAmount(old => {
      const newCount = old + 1;

      setTotal(rest.price * newCount);
      return newCount;
    });
  };

  const min = () => {
    setAmount(old => {
      if (old === 1) return old;

      const newCount = old - 1;

      setTotal(rest.price * newCount);
      return newCount;
    });
  };

  const onCloseModal = useCallback(() => {
    modalRef.current.close();
  }, []);

  const addItemCart = () => {
    dispatch(
      addItem({
        ...rest,
        itemId: rest.id,
        amount,
      }),
    );
    onCloseModal();
  };

  return (
    <ModalBase ref={modalRef}>
      <Content>
        <Header>
          <Ionicons
            onPress={onCloseModal}
            name="close-circle"
            size={20}
            color={colors.primary}
          />
        </Header>
        <ProductInfo>
          <Image
            source={{ uri: rest.image }}
            style={{
              height: 80,
              width: 80,
              resizeMode: 'cover',
              borderRadius: 11,
            }}
          />
          <ViewTexts>
            <Title>{rest.name}</Title>
            <Description>{rest.description}</Description>
          </ViewTexts>
        </ProductInfo>
        <Prices>
          <PlusOrMin>
            <MaterialIcons
              name="remove-circle"
              color={colors.primary}
              size={20}
              onPress={min}
            />
            <Text>{amount}</Text>
            <MaterialIcons
              name="add-circle"
              color={colors.primary}
              size={20}
              onPress={plus}
            />
          </PlusOrMin>
          <View>
            <Text>Preço: {formatNumber(rest.price)}</Text>
            <Text>Total: {formatNumber(total)}</Text>
          </View>
        </Prices>
        <View>
          <ModalButton onPress={addItemCart}>Adicionar ao carrinho</ModalButton>
        </View>
      </Content>
    </ModalBase>
  );
};

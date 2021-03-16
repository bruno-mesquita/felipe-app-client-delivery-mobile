import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import ModalBase from '../ModalBase';
import ModalButton from '../ModalButton';

import { addItem } from '../../store/ducks/cart/cart.actions';
import { ModalItemProps } from './props';
import formatNumber from '../../utils/format-number';
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

const ModalItem = ({
  modalRef,
  id,
  name,
  description,
  image,
  price,
  establishmentId,
}: ModalItemProps) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const [total, setTotal] = useState(price);
  const [amount, setAmount] = useState(1);

  const plus = () => {
    setAmount(old => {
      const newCount = old + 1;

      setTotal(price * newCount);
      return newCount;
    });
  };

  const min = () => {
    setAmount(old => {
      if (old === 1) return old;

      const newCount = old - 1;

      setTotal(price * newCount);
      return newCount;
    });
  };

  const onCloseModal = () => modalRef.current.close();

  const addItemCart = () => {
    dispatch(
      addItem({
        price,
        amount,
        itemId: id,
        image,
        name,
        establishmentId,
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
            source={image}
            style={{ height: 80, width: 80, resizeMode: 'cover' }}
          />
          <ViewTexts>
            <Title>{name}</Title>
            <Description>{description}</Description>
          </ViewTexts>
        </ProductInfo>
        <Prices>
          <PlusOrMin>
            <MaterialIcons
              name="add-circle"
              color={colors.primary}
              size={20}
              onPress={plus}
            />
            <Text>{amount}</Text>
            <MaterialIcons
              name="remove-circle"
              color={colors.primary}
              size={20}
              onPress={min}
            />
          </PlusOrMin>
          <View>
            <Text>Preço: {formatNumber(price)}</Text>
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

export default ModalItem;

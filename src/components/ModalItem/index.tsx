import { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ModalButton } from '../ModalButton';
import { ModalBase } from '../ModalBase';

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
  const navigation = useNavigation();

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

  const addItemCart = () => {
    dispatch(
      addItem({
        ...rest,
        itemId: rest.id,
        amount,
      }),
    );

    navigation.navigate('Cart');
    modalRef.current.close();
  };

  return (
    <ModalBase ref={modalRef}>
      <Content>
        <Header>
          <Ionicons
            onPress={() => modalRef.current.close()}
            name="close-circle"
            size={25}
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
              size={25}
              onPress={min}
            />
            <Text>{amount}</Text>
            <MaterialIcons
              name="add-circle"
              color={colors.primary}
              size={25}
              onPress={plus}
            />
          </PlusOrMin>
          <View>
            <Text>Preço: {formatNumber(rest.price)}</Text>
            <Text>Total: {formatNumber(total)}</Text>
          </View>
        </Prices>
        <View>
          <ModalButton onPress={addItemCart}>
            Adicionar ao carrinho
          </ModalButton>
        </View>
      </Content>
    </ModalBase>
  );
};

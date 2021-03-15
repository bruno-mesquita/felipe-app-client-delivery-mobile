import React, { useRef, useMemo, useCallback } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../components/Button';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { Card } from './Components';

import formatNumber from '../../../utils/format-number';
import {
  Container,
  ContainerInfo,
  Text,
  Texts,
  Prices,
  ViewButton,
} from './styles';

export const Cart = () => {
  const dispatch = useDispatch();

  // Estado Global
  const { fee, items, subTotal } = useSelector(({ cart }) => ({
    items: cart.items,
    fee: cart.fee,
    subTotal: cart.total,
  }));

  // Estado local
  const modalRef = useRef<ModalBaseHandle>(null);

  const total = useMemo(() => subTotal + fee, [subTotal]);

  const openModalOrder = useCallback(() => {
    // modalRef.current?.open();
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={items}
          keyExtractor={item => item.itemId}
          renderItem={({ item }) => <Card {...item} />}
        />
      </SafeAreaView>
      <ContainerInfo>
        <Texts>
          <Text>SubTotal:</Text>
          <Text>Frete:</Text>
          <Text>Total:</Text>
        </Texts>
        <Prices>
          <Text>{formatNumber(subTotal)}</Text>
          <Text>{formatNumber(fee)}</Text>
          <Text>{formatNumber(total)}</Text>
        </Prices>
      </ContainerInfo>
      <ViewButton>
        <Button primaryColor onPress={openModalOrder}>
          Proximo
        </Button>
      </ViewButton>
    </Container>
  );
};

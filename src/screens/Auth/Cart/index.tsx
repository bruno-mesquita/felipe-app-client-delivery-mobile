import React, { useRef, useMemo, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../../components/Button';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { Card, FinishModal } from './Components';

import formatNumber from '../../../utils/format-number';
import {
  Container,
  ContainerInfo,
  Text,
  Texts,
  Prices,
  ViewButton,
  Divider,
} from './styles';

export const Cart = () => {
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
    if (items.length === 0) {
      Alert.alert('Aviso', 'Você não possui nenhum item no seu carrinho');
    } else {
      modalRef.current?.open();
    }
  }, [items]);

  const Footer = () => (
    <>
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
    </>
  );

  return (
    <>
      <FinishModal modalRef={modalRef} />
      <Container>
        <FlatList
          data={items}
          keyExtractor={item => String(item.itemId)}
          renderItem={({ item }) => <Card {...item} />}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Divider}
        />
      </Container>
    </>
  );
};

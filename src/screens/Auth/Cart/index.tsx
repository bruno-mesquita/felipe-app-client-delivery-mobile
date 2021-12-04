import { useRef, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { Button } from '../../../components/Button';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { Card, FinishModal } from './Components';
import { ScreenAuthProps } from '../../../utils/ScreenProps';

import formatNumber from '../../../utils/format-number';
import { Container, ContainerInfo, Text, Texts, Prices, ViewButton, Divider } from './styles';

export const Cart = ({ navigation }: ScreenAuthProps<'Cart'>) => {
  // Estado Global
  const isFocused = useIsFocused();
  const { fee, items, subTotal, total } = useSelector(({ cart }) => ({
    items: cart.items,
    fee: cart.fee,
    subTotal: cart.total,
    total: Number(cart.total) + Number(cart.fee),
  }));

  useEffect(() => {
    if (isFocused && items.length === 0) navigation.goBack();
  }, [isFocused, navigation, items]);

  // Estado local
  const modalRef = useRef<ModalBaseHandle>(null);

  const openModalOrder = () => {
    if (items.length === 0) {
      Alert.alert('Aviso', 'Você não possui nenhum item no seu carrinho');
    } else {
      modalRef.current?.open();
    }
  };

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
          Finalizar
        </Button>
        <Button textProps={{ style: { fontSize: 18 } }} primaryColor onPress={() => navigation.goBack()}>
          Continuar comprando
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

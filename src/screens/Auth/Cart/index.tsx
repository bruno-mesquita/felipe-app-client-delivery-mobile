import { useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Button, useToast, Text, Flex, Divider } from 'native-base';

import { useAppSelector } from '@store/hooks';
import { ModalBaseHandle } from '../../../components/ModalBase/props';
import { Card, FinishModal } from './Components';
import { ScreenAuthProps } from '../../../utils/ScreenProps';
import formatNumber from '../../../utils/format-number';

export const Cart = ({ navigation }: ScreenAuthProps<'Cart'>) => {
  const toast = useToast();
  const isFocused = useIsFocused();
  const { fee, items, subTotal, total } = useAppSelector(({ cart }) => ({
    items: cart.items,
    fee: cart.fee,
    subTotal: cart.total,
    total: Number(cart.total) + Number(cart.fee),
  }));

  const modalRef = useRef<ModalBaseHandle>(null);

  useEffect(() => {
    if (isFocused && items.length === 0) navigation.goBack();
  }, [isFocused, navigation, items]);

  const openModalOrder = () => {
    if (items.length === 0) {
      toast.show({
        w: '90%',
        title: 'Aviso!',
        description: 'Você não possui nenhum item no seu carrinho',
        status: 'info',
      });
    } else {
      modalRef.current?.open();
    }
  };

  const Footer = () => (
    <>
      <Flex flexDirection="row" justify="center">
        <Flex width="25%" p="10px">
          <Text fontWeight={600}>SubTotal:</Text>
          <Text fontWeight={600}>Frete:</Text>
          <Text fontWeight={600}>Total:</Text>
        </Flex>
        <Flex width="25%" p="10px">
          <Text fontWeight={600}>{formatNumber(subTotal)}</Text>
          <Text fontWeight={600}>{formatNumber(fee)}</Text>
          <Text fontWeight={600}>{formatNumber(total)}</Text>
        </Flex>
      </Flex>
      <Flex align="center">
        <Button w="60%" variant="inverted" onPress={openModalOrder}>
          Finalizar
        </Button>
        <Button
          mt="20px"
          w="60%"
          variant="inverted"
          onPress={() => navigation.goBack()}
        >
          Continuar comprando
        </Button>
      </Flex>
    </>
  );

  return (
    <>
      <FinishModal modalRef={modalRef} />
      <FlatList
        data={items}
        keyExtractor={item => item.itemId.toString()}
        renderItem={({ item }) => <Card {...item} />}
        ListFooterComponent={Footer}
        ListFooterComponentStyle={{ marginBottom: 20 }}
        ItemSeparatorComponent={() => <Divider my="10px" />}
      />
    </>
  );
};

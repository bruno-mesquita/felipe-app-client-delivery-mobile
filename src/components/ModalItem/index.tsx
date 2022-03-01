import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Button, Text, Flex } from 'native-base';

import { FastImage } from '../FastImage';
import { ModalBase } from '../ModalBase';

import { cartActions } from '@store/reducers/cart';
import formatNumber from '@utils/format-number';
import { useAppDispatch } from '@store/hooks';

import type { ModalItemProps } from './props';
import { ProductInfo, ViewTexts, Header } from './styles';
import { useGetProduct } from '@hooks';

export const ModalItem = ({ modalRef, productId, menuId }: ModalItemProps) => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { id: establishmentId, fee } = useRoute().params as {
    id: number;
    fee: number;
  };

  const { data: product } = useGetProduct(productId, menuId);

  const [amount, setAmount] = useState(1);

  const plus = () => {
    const newCount = amount + 1;
    setAmount(newCount);
  };

  const min = () => {
    setAmount(old => {
      if (old === 1) return old;

      const newCount = old - 1;

      return newCount;
    });
  };

  const addItemCart = () => {
    dispatch(
      cartActions.addItem({
        establishmentId,
        fee,
        amount,
        image: product.photo.encoded,
        itemId: productId,
        name: product.name,
        price: product.price,
      })
    );

    modalRef.current.close();
  };

  return (
    <ModalBase ref={modalRef}>
      <Flex px="20px" pt="10px" pb="20px">
        <Header>
          <Ionicons
            onPress={() => modalRef.current.close()}
            name="close-circle"
            size={25}
            color={colors.primary}
          />
        </Header>
        <ProductInfo>
          {product.photo.encoded !== '' && (
            <FastImage
              size="80px"
              resizeMode="cover"
              rounded="11px"
              source={{ uri: product?.photo.encoded }}
              cacheKey={product?.photo.id.toString()}
            />
          )}
          <ViewTexts>
            <Text fontWeight="bold">{product?.name}</Text>
            <Text>{product?.description}</Text>
          </ViewTexts>
        </ProductInfo>
        <Flex direction="row" justify="space-between">
          <Flex direction="row" align="center" justify="space-between">
            <TouchableOpacity onPress={min}>
              <MaterialIcons
                name="remove-circle"
                color={colors.primary}
                size={25}
              />
            </TouchableOpacity>
            <Text mx="10px">{`${amount * product?.unit} ${
              product?.unitType
            }`}</Text>
            <TouchableOpacity onPress={plus}>
              <MaterialIcons
                name="add-circle"
                color={colors.primary}
                size={25}
              />
            </TouchableOpacity>
          </Flex>
          <Flex>
            <Text>Preço: {formatNumber(product?.price)}</Text>
            <Text>Total: {formatNumber(amount * product?.price)}</Text>
          </Flex>
        </Flex>

        <Button
          w="70%"
          mt="20px"
          alignSelf="center"
          bg="#F8C200"
          _text={{ color: '#fff' }}
          rounded="15px"
          onPress={addItemCart}
        >
          Adicionar ao carrinho
        </Button>
      </Flex>
    </ModalBase>
  );
};

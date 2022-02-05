import { useWindowDimensions } from 'react-native';
import { Flex, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { FastImage } from '@components';
import formatNumber from '@utils/format-number';
import { useAppDispatch } from '@store/hooks';
import { cartActions } from '@store/reducers/cart';

import { CardProps } from './props';

export const Card = ({
  total,
  image,
  amount,
  price,
  name,
  itemId,
}: CardProps) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const remove = () => dispatch(cartActions.removeItem({ itemId }));

  return (
    <Flex
      flexDirection="row"
      m="10px"
      rounded="11px"
      alignSelf="center"
      align="flex-end"
      w={width * 0.9}
    >
      <FastImage
        size="80px"
        rounded="11px"
        cacheKey={itemId.toString()}
        source={{ uri: image }}
        resizeMode="cover"
      />
      <AntDesign
        onPress={remove}
        style={{ position: 'absolute', top: 5, right: 10 }}
        name="closecircle"
        size={15}
        color={colors.primary}
      />
      <Flex
        direction="row"
        pb="10px"
        justify="space-around"
        w={width * 0.9 - 80}
      >
        <Flex>
          <Text fontWeight={600}>{name}</Text>
          <Text>qtd: {amount}</Text>
        </Flex>

        <Flex>
          <Text>{`Preço: ${formatNumber(price)}`}</Text>
          <Text>{`Total: ${formatNumber(total)}`}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

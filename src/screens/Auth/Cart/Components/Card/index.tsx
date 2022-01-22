import { Flex, Text } from 'native-base';
import ExpoFastImage from 'expo-fast-image';

import formatNumber from '@utils/format-number';

import { RemoveButton } from '../RemoveButton';
import { CardProps } from './props';

export const Card = ({
  total,
  image,
  amount,
  price,
  name,
  itemId,
}: CardProps) => {
  return (
    <Flex
      flexDirection="row"
      m="10px"
      borderWidth="1px"
      borderColor="#c4c4c4"
      rounded="11px"
    >
      <ExpoFastImage
        style={{ height: 90, width: 90, borderRadius: 11 }}
        cacheKey={itemId}
        source={{ uri: image }}
        resizeMode="cover"
      />
      <Flex justify="space-between" w="75%" p="5px">
        <RemoveButton id={itemId} />
        <Text fontWeight={600}>{name}</Text>
        <Flex
          flexDirection="row"
          justify="space-between"
          w="100%"
          align="flex-end"
        >
          <Text>qtd: {amount}</Text>
          <Flex>
            <Text>{`Preço: ${formatNumber(price)}`}</Text>
            <Text>{`Total: ${formatNumber(total)}`}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

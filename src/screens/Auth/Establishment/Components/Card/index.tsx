import { TouchableOpacity } from 'react-native';
import { Flex, Text } from 'native-base';

import { FastImage } from '@components';
import formatNumber from '@utils/format-number';
import type { CardProps } from './props';

export const Card = ({ photo, name, price, onPress }: CardProps) => (
  <TouchableOpacity onPress={onPress}>
    <Flex
      mx="20px"
      flexDirection="row"
      shadow={1}
      mb="20px"
      bg="#fff"
      rounded="10px"
    >
      <FastImage
        resizeMode="contain"
        size="80px"
        rounded="9px"
        source={{ uri: photo.encoded }}
        cacheKey={photo.id.toString()}
      />
      <Flex justify="space-between" align="center" p="10px" width="70%">
        <Text fontWeight={600}>{name.trim()}</Text>
        <Text>{formatNumber(price)}</Text>
      </Flex>
    </Flex>
  </TouchableOpacity>
);

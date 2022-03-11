import { TouchableOpacity } from 'react-native';
import { Flex, Text } from 'native-base';

import { FastImage } from '@components';
import formatNumber from '@utils/format-number';
import { useGetImage } from '@hooks';

import type { CardProps } from './props';

export const Card = ({ name, price, onPress, image_id }: CardProps) => {
  const { data: photo } = useGetImage(image_id);

  return (
    <TouchableOpacity onPress={onPress}>
      <Flex
        mx="20px"
        flexDirection="row"
        shadow={1}
        mb="20px"
        bg="#fff"
        rounded="10px"
      >
        {photo.id !== 0 && (
          <FastImage
            resizeMode="contain"
            size="80px"
            rounded="9px"
            source={{ uri: photo.encoded }}
            cacheKey={photo.id.toString()}
          />
        )}

        <Flex justify="space-between" align="center" p="10px" width="70%">
          <Text fontWeight={600}>{name.trim()}</Text>
          <Text>{formatNumber(price)}</Text>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};

import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Flex } from 'native-base';

import { FastImage } from '@components';
import { NavigationAuthHook } from '@utils/ScreenProps';
import formatPrice from '@utils/format-number';
import { useGetImage } from '@hooks';

import type { Props } from './props';

export const Card = (props: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Home'>>();

  const { data: image } = useGetImage(props.imageId || props.image_id);

  const toStoreDetail = () => {
    navigation.navigate('Establishment', {
      id: props.id,
      image: image.encoded,
      fee: props.freightValue,
      name: props.name,
      isOpen: false,
    });
  };

  return (
    <TouchableOpacity onPress={toStoreDetail}>
      <Flex
        rounded="10px"
        w="100%"
        alignSelf="center"
        flexDirection="row"
        justify="space-between"
        align="center"
        p="10px"
        bg="#fff"
        shadow="2"
        mb="20px"
      >
        {image && (
          <FastImage
            cacheKey={image.id.toString()}
            source={{ uri: image.encoded }}
            size="65px"
            rounded="100px"
            resizeMode="cover"
          />
        )}
        <Text alignSelf="center" textAlign="left" w="50%">
          {props.name}
        </Text>
        <Flex align="center" justify="space-between">
          <Text color="green" fontWeight={600}>
            {props.openingTime}h - {props.closingTime}h
          </Text>
          <Flex flexDirection="row" align="center">
            <Text mr="5px">{formatPrice(props.freightValue)}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Flex>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};

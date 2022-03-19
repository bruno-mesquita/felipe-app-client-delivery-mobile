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

  const currentHour = new Date().getHours();
  const isOpen =
    props.openingTime <= currentHour && props.closingTime >= currentHour;

  const toStoreDetail = () => {
    navigation.navigate('Establishment', {
      id: props.id,
      image: image.encoded,
      fee: props.freightValue,
      name: props.name,
      isOpen,
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
        <Flex w="50%" align="flex-start">
          <Text>{props.name}</Text>
          <Flex
            mt="5px"
            align="center"
            justify="center"
            rounded="8px"
            bg={isOpen ? 'green.600' : 'red.600'}
            px="10px"
          >
            <Text color="#fff">{isOpen ? 'Aberto' : 'Fechado'}</Text>
          </Flex>
        </Flex>
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

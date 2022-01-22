import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import ExpoImageFast from 'expo-fast-image';
import { Text, Flex } from 'native-base';
import { isAfter, setHours } from 'date-fns';

import { NavigationAuthHook } from '@utils/ScreenProps';
import formatPrice from '@utils/format-number';

import type { Props } from './props';

export const Card = (props: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Home'>>();

  const isOpen = isAfter(new Date(), setHours(new Date(), props.closingTime));

  const toStoreDetail = () => {
    navigation.navigate('Establishment', {
      id: props.id,
      image: props.image.encoded,
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
        <ExpoImageFast
          cacheKey={props.id}
          source={{ uri: props.image.encoded }}
          style={{
            resizeMode: 'cover',
            height: 65,
            width: 65,
            borderRadius: 100,
          }}
        />
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

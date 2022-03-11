import { useRoute } from '@react-navigation/native';
import { Text, Flex } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { FastImage } from '@components';
import formatPrice from '@utils/format-number';
import { RouteAuthHook } from '@utils/ScreenProps';

export const EstablishmentInfo = () => {
  const { image, name, fee, isOpen } =
    useRoute<RouteAuthHook<'Establishment'>>().params;

  return (
    <Flex pt="15px" pl="15px" w="100%" flexDirection="row">
      <FastImage
        size="90px"
        rounded="100px"
        source={{ uri: image }}
        cacheKey={name}
      />
      <Flex w="70%" p="15px">
        <Text fontWeight={600} alignSelf="center">
          {name}
        </Text>

        <Flex
          mt="10px"
          flexDirection="row"
          justify="space-around"
          align="center"
        >
          <Flex
            align="center"
            justify="center"
            rounded="8px"
            bg={isOpen ? 'green.600' : 'red.600'}
            px="10px"
          >
            <Text color="#fff">{isOpen ? 'Aberto' : 'Fechado'}</Text>
          </Flex>
          <Flex flexDirection="row" align="center">
            <Text mr="5px">{formatPrice(fee)}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

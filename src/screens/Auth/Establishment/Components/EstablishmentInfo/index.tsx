import { useRoute } from '@react-navigation/native';
import { Text, Flex } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import ExpoFastImage from 'expo-fast-image';

import formatPrice from '@utils/format-number';
import { RouteAuthHook } from '@utils/ScreenProps';

export const EstablishmentInfo = () => {
  const { image, name, fee, isOpen } =
    useRoute<RouteAuthHook<'Establishment'>>().params;

  return (
    <Flex pt="15px" pl="15px" w="100%" flexDirection="row">
      <ExpoFastImage
        style={{ height: 90, width: 90, borderRadius: 100 }}
        source={{ uri: image }}
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
          <Text>{isOpen ? 'Aberto' : 'Fechado'}</Text>
          <Flex flexDirection="row" align="center">
            <Text mr="5px">{formatPrice(fee)}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

import { useWindowDimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Flex, Text } from 'native-base';

export const NoOrders = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Flex w={width} h={height} justify="center" align="center">
      <MaterialCommunityIcons name="calendar-text" size={150} color="#9E0404" />
      <Text fontSize="20px">Sem pedidos</Text>
    </Flex>
  );
};

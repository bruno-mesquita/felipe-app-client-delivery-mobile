import { FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Flex, Text, Fab, Icon } from 'native-base';

import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card } from './Components';
import { useGetAdresses } from '@hooks';

export const Adresses = ({ navigation }: ScreenAuthProps<'Adresses'>) => {
  const { colors } = useTheme();

  const { adresses } = useGetAdresses();

  const EmptyComponent = () => (
    <Flex flex={1} justify="center" align="center">
      <Ionicons name="location-sharp" size={150} color={colors.primary} />
      <Text mt="20px" fontSize="20px">
        Sem endereços
      </Text>
    </Flex>
  );

  return (
    <>
      <FlatList
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
          paddingTop: 20,
        }}
        style={{ width: '100%' }}
        data={adresses}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
      />

      <Fab
        onPress={() => navigation.navigate('AddAddress')}
        renderInPortal={false}
        bg={colors.primary}
        shadow={2}
        size="sm"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
      />
    </>
  );
};

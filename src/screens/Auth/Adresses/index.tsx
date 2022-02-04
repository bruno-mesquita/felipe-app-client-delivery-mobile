import { Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { ScreenAuthProps } from '@utils/ScreenProps';

import { Card } from './Components';
import { Container, ButtonAdd, Empty } from './styles';
import { useGetAdresses } from '@hooks';

export const Adresses = ({ navigation }: ScreenAuthProps<'Adresses'>) => {
  const { colors } = useTheme();

  const { adresses } = useGetAdresses();

  const EmptyComponent = () => (
    <Empty>
      <Ionicons name="location-sharp" size={150} color={colors.primary} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Sem endereços</Text>
    </Empty>
  );

  return (
    <Container>
      <FlatList
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{ width: '100%', alignItems: 'center' }}
        style={{ width: '100%' }}
        data={adresses}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.id.toString()}
      />
      <ButtonAdd onPress={() => navigation.navigate('AddAddress')}>
        <Ionicons name="add" size={30} color={colors.secundary} />
      </ButtonAdd>
    </Container>
  );
};

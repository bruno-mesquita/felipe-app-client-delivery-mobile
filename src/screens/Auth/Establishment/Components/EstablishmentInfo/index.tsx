import { useRoute } from '@react-navigation/native';
import { Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import formatPrice from '@utils/format-number';
import { RouteAuthHook } from '@utils/ScreenProps';

import { Container, EstablishmentDetailTitle, EstablishmentDetailInfo, Row, Header } from './styles';

export const EstablishmentInfo = () => {
  const { image, name, fee } = useRoute<RouteAuthHook<'Establishment'>>().params;

  return (
    <Container>
      <Image source={{ uri: image }} style={{ height: 90, width: 90, borderRadius: 100 }} />
      <Header>
        <EstablishmentDetailTitle>{name}</EstablishmentDetailTitle>
        <EstablishmentDetailInfo>
          <Text>Aberto</Text>
          <Row>
            <Text>{formatPrice(fee)}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </Row>
        </EstablishmentDetailInfo>
      </Header>
    </Container>
  );
};

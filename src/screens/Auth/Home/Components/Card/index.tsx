import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { CardBase } from '@components';
import { NavigationAuthHook } from '@utils/ScreenProps';
import formatPrice from '@utils/format-number';

import { Props } from './props';
import { Container, Image, MyView, Time } from './styles';

export const Card = (props: Props) => {
  const navigation = useNavigation<NavigationAuthHook<'Home'>>();

  const toStoreDetail = () => {
    navigation.navigate('Establishment', {
      id: props.id,
      image: props.image.encoded,
      fee: props.freightValue,
      name: props.name,
    });
  };

  return (
    <CardBase onPress={toStoreDetail} style={{ height: 90 }}>
      <Container>
        <MyView>
          <Image source={{ uri: props.image.encoded }} style={{ resizeMode: 'cover' }} />
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              width: '40%',
            }}
          >
            <Text>{props.name}</Text>
          </View>
          <View
            style={{
              height: '75%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Time>
              {props.openingTime}h - {props.closingTime}h
            </Time>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ marginRight: 5 }}>{formatPrice(props.freightValue)}</Text>
              <MaterialIcons name="motorcycle" size={25} />
            </View>
          </View>
        </MyView>
      </Container>
    </CardBase>
  );
};

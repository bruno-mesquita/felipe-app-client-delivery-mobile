import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import CardBase from '../../CardBase';
import { Props } from './props';
import { Container } from './styles';

const Card = ({ name, id, photo, rate, time, fee }: Props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const toStoreDetail = () => {
    // navigation.navigate('', { id })
    console.log('Detalhes do estabelecimento');
  };

  const formattedDate = (date: string) => {};

  return (
    <CardBase onPress={() => toStoreDetail()}>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Image
            source={photo}
            style={{
              resizeMode: 'cover',
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <View style={{ width: '70%' }}>
            <Text>{name}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text style={{ color: 'green', fontWeight: 'bold' }}>17h - 22h</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>R${fee}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>{rate}</Text>
            <MaterialIcons name="star-half" size={20} color={colors.third} />
          </View>
        </View>
      </Container>
    </CardBase>
  );
};

export default Card;

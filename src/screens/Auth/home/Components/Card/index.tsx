import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import CardBase from '../../../../../components/CardBase';
import { Props } from './props';
import { Container, Image, MyView, Time, FeeView } from './styles';
import formatPrice from '../../../../../utils/format-number';

export const Card = (props: Props) => {
  const navigation = useNavigation();

  const toStoreDetail = () => {
    navigation.navigate('Establishment', { id: props.id });
  };

  return (
    <CardBase onPress={toStoreDetail}>
      <Container>
        <MyView>
          <Image source={props.image} style={{ resizeMode: 'cover' }} />
          <View style={{ width: '70%' }}>
            <Text>{props.name}</Text>
          </View>
        </MyView>
        <MyView>
          <Time>
            {props.openingTime}h - {props.closingTime}h
          </Time>
          <FeeView>
            <Text style={{ marginRight: 5 }}>
              {formatPrice(props.freightValue)}
            </Text>
            <MaterialIcons name="motorcycle" size={25} />
          </FeeView>
        </MyView>
      </Container>
    </CardBase>
  );
};

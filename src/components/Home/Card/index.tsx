import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import CardBase from '../../CardBase';
import { Props } from './props';
import { Container, Image, MyView, Time, FeeView } from './styles';
import formatPrice from '../../../utils/format-number';

const Card = ({ name, id, photo, rate, time, fee }: Props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const toStoreDetail = () => {
    navigation.navigate('Establishment', { id });
  };

  return (
    <CardBase onPress={() => toStoreDetail()}>
      <Container>
        <MyView>
          <Image source={photo} style={{ resizeMode: 'cover' }} />
          <View style={{ width: '70%' }}>
            <Text>{name}</Text>
          </View>
        </MyView>
        <MyView>
          <Time>
            {time.open}h - {time.close}h
          </Time>
          <FeeView>
            <Text style={{ marginRight: 5 }}>{formatPrice(fee)}</Text>
            <MaterialIcons name="motorcycle" size={25} />
          </FeeView>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: 5 }}>{rate}</Text>
            <MaterialIcons name="star-half" size={20} color={colors.third} />
          </View> */}
        </MyView>
      </Container>
    </CardBase>
  );
};

export default Card;

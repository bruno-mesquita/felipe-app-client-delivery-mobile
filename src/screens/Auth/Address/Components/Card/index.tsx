import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardBase from '../../../../../components/CardBase';
import { Checkbox } from '../Checkbox';

import { setAddressActive } from '../../../../../store/ducks/user/user.actions';
import { Container, Header, Body, Footer, Nickname } from './styles';
import { CardProps } from './props';

export const Card = ({ id, region, street, nickname }: CardProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addressActive = useSelector(({ user }) => user.addressActive);

  const edit = () => navigation.navigate('UpdateAddress', { id });

  const onChangeActive = () => {
    dispatch(setAddressActive(addressActive === id ? null : id));
  };

  return (
    <CardBase onPress={edit}>
      <Container>
        <Header>
          <Checkbox
            checked={addressActive === id}
            onChange={() => onChangeActive()}
          />
          <Nickname>{nickname}</Nickname>
        </Header>
        <Body>
          <Text>{street}</Text>
        </Body>
        <Footer>
          <Text>{region}</Text>
        </Footer>
      </Container>
    </CardBase>
  );
};

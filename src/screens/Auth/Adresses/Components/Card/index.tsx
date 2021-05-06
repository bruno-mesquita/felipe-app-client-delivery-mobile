import React, { useState, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CardBase } from '@components';
import { getApi } from '@services/api';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { Checkbox } from '../Checkbox';
import { Container, Header, Body, Footer, Nickname, Content } from './styles';
import { Address } from '../../props';

export const Card = (props: Address) => {
  const navigation = useNavigation<NavigationAuthHook<'Adresses'>>();

  const [address, setAddress] = useState<any>(null);

  useEffect(() => {
    setAddress(props);
  }, [props]);

  const toGoEdit = () => navigation.navigate('UpdateAddress', { id: props.id });

  const onChange = async () => {
    try {
      const api = getApi();

      if (address.active) {
        await api.put(`/adresses-client/${props.id}/deactivate`);
      } else {
        await api.put(`/adresses-client/${props.id}/active`);
      }

      setAddress(old => ({ ...old, active: !old.active }));
      Alert.alert('Endereço padrão atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro ao atualizar um endereço como padrão');
    }
  };

  return (
    <CardBase onPress={toGoEdit}>
      <Container>
        <Content>
          <Header>
            <Checkbox checked={address?.active} onChange={() => onChange()} />
            <Nickname>{address?.nickname}</Nickname>
          </Header>
          <Body>
            <Text>{`${address?.street}, ${address?.number} - ${address?.neighborhood}`}</Text>
          </Body>
          <Footer>
            <Text>{`${address?.city} - ${address?.state}`}</Text>
          </Footer>
        </Content>
      </Container>
    </CardBase>
  );
};

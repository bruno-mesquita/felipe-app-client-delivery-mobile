import { useState, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CardBase } from '@components';
import { getApi } from '@services/api';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { Checkbox } from '../Checkbox';
import { Container, Header, Body, Footer, Nickname, Content } from './styles';
import { Address } from '../../props';

export const Card = ({ reender, ...props }: Address & { reender: () => void }) => {
  const api = getApi();
  const navigation = useNavigation<NavigationAuthHook<'Adresses'>>();

  const [address, setAddress] = useState<Address>(null);
  const [fieldDefault, setFieldDefault] = useState(false);

  useEffect(() => {
    const fieldDefault = 'Não informado';

    if (
      props.street === fieldDefault &&
      props.neighborhood === fieldDefault &&
      props.number === fieldDefault
    ) {
      setFieldDefault(true);
    }

    setAddress(props);
  }, []);

  const toGoEdit = () => navigation.navigate('UpdateAddress', { id: props.id });

  const onChange = async () => {
    try {
      if (address.active) {
        await api.put(`/adresses-client/${props.id}/deactivate`);
      } else {
        await api.put(`/adresses-client/${props.id}/active`);
      }

      setAddress(old => ({ ...old, active: !old.active }));
      Alert.alert('Aviso','Endereço padrão atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro', 'Houve um erro ao atualizar o endereço como padrão. Você não pode ficar sem endereço ativo');
    }
  };

  const deleteAddress = () => {
    api.delete(`/adresses-client/${props.id}`).then(() => reender());
  }

  const onLongPress = () => {
    Alert.alert('Deletar endereço', 'Você deseja deletar esse endereço?', [
      {
        onPress: deleteAddress,
        text: 'Sim'
      },
      {
        text: 'Não'
      }
    ])
  }

  return (
    <CardBase onPress={toGoEdit} onLongPress={onLongPress}>
      <Container>
        <Content>
          <Header>
            <Checkbox checked={address?.active} onChange={() => onChange()} />
            <Nickname>{address?.nickname}</Nickname>
          </Header>
          <Body>
            {fieldDefault ? (
              <Text>Endereço não informado</Text>
            ) : (
              <Text>{`${address?.street}, ${address?.number} - ${address?.neighborhood}`}</Text>
            )}
          </Body>
          <Footer>
            <Text>{`${address?.city.name} - ${address?.city.state.name}`}</Text>
          </Footer>
        </Content>
      </Container>
    </CardBase>
  );
};

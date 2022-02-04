import { useState, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';

import { CardBase } from '@components';
import api from '@services/api';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { Checkbox } from '../Checkbox';
import { Container, Header, Body, Footer, Nickname, Content } from './styles';
import { useGetAdresses, IAddress } from '@hooks';

export const Card = ({ ...props }: IAddress) => {
  const navigation = useNavigation<NavigationAuthHook<'Adresses'>>();
  const toast = useToast();
  const { mutate } = useGetAdresses();

  const [fieldDefault, setFieldDefault] = useState(false);

  useEffect(() => {
    const fieldDefault = 'Não informado';

    if (
      props.street === fieldDefault &&
      props.neighborhood === fieldDefault &&
      props.number === (fieldDefault as any)
    ) {
      setFieldDefault(true);
    }
  }, []);

  const toGoEdit = () => navigation.navigate('UpdateAddress', { id: props.id });

  const onChange = async () => {
    try {
      await api.put(`/adresses-client/${props.id}`, {
        active: !props.active,
      });

      mutate(old => {
        const index = old.findIndex(e => e.id === props.id);

        const copy = [...old];

        copy[index].active = !copy[index].active;

        return copy;
      });
      toast.show({
        status: 'success',
        title: 'Endereço padrão atualizado com sucesso',
      });
    } catch (err) {
      toast.show({
        title: 'Houve um erro!',
        description:
          'Houve um erro ao atualizar o endereço como padrão. Você não pode ficar sem endereço ativo',
        status: 'error',
      });
    }
  };

  const deleteAddress = () => {
    api.delete(`/adresses-client/${props.id}`).then(() => {
      mutate(old => old.filter(e => e.id !== props.id));
    });
  };

  const onLongPress = () => {
    Alert.alert('Deletar endereço', 'Você deseja deletar esse endereço?', [
      {
        onPress: deleteAddress,
        text: 'Sim',
      },
      {
        text: 'Não',
      },
    ]);
  };

  return (
    <CardBase onPress={toGoEdit} onLongPress={onLongPress}>
      <Container>
        <Content>
          <Header>
            <Checkbox checked={props.active} onChange={() => onChange()} />
            <Nickname>{props.nickname}</Nickname>
          </Header>
          <Body>
            {fieldDefault ? (
              <Text>Endereço não informado</Text>
            ) : (
              <Text>{`${props.street}, ${props.number} - ${props.neighborhood}`}</Text>
            )}
          </Body>
          <Footer>
            <Text>{`${props.city.name} - ${props.city.state.name}`}</Text>
          </Footer>
        </Content>
      </Container>
    </CardBase>
  );
};

import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { getApi } from '@services/api';
import { useUser } from '@hooks';
import { Item } from './Components';
import { logout } from '../../../store/ducks/auth/auth.actions';

import { Container, Divider } from './styles';

export const Account = ({ navigation }) => {
  const api = getApi();
  const dispatch = useDispatch();
  const { active: activeHook } = useUser(['active']);
  const [userActive, setUserActive] = useState(false);

  useEffect(() => {
    setUserActive(activeHook);
  }, [activeHook])

  const [activeOrDeactivateLoading, setActiveOrDeactivateLoading] = useState(false);

  const deactivate = async () => {
    try {
      setActiveOrDeactivateLoading(true);

      await api.put('/clients/deactivate');

      setUserActive(old => !old);
      Alert.alert('Aviso', 'Conta desativada! você não poderá acessar algumas telas agora');
    } catch (err) {
      Alert.alert('Erro', 'Houve um problema ao desativar sua conta');
    } finally {
      setActiveOrDeactivateLoading(false);
    }
  };

  const active = async () => {
    try {
      setActiveOrDeactivateLoading(true);

      await api.put('/clients/activate');

      setUserActive(old => !old);
      Alert.alert('Mensagem', 'Conta ativada!');
    } catch (err) {
      console.log(err.response);
      Alert.alert('Erro', 'Houve um problema ao ativar sua conta');
    } finally {
      setActiveOrDeactivateLoading(false);
    }
  };

  const destroy = () => {
    Alert.alert(
      'Aviso!',
      'Você não podera mais recuperar sua conta! se deseja somente desativar clique em "Desativar conta"',
      [
        {
        text: 'Ok',
        onPress: async () => {
          try {
            await api.delete('/clients');

            dispatch(logout());
          } catch (err) {
            Alert.alert('Erro', 'Houve um erro deletar sua conta');
          }
        }
      },
      {
        text: 'Sair'
      }
    ]
      )
  };

  return (
    <Container>
      <Item onPress={() => navigation.navigate('ChangePassword')}>Alterar senha</Item>
      <Divider />
      <Item loading={activeOrDeactivateLoading} onPress={userActive ? deactivate : active}>{`${userActive ? 'Desativar' : 'Ativar'} conta`}</Item>
      <Divider />
      <Item onPress={destroy}>Deletar conta</Item>
      <Divider />
    </Container>
  );
}
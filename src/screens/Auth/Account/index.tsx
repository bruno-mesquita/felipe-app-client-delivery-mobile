import { Alert, TouchableOpacity } from 'react-native';
import { Text, Flex, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import api from '@services/api';
import { useAppDispatch } from '@store/hooks';
import { useUser } from '@hooks';
import { authActions } from '@store/reducers/auth';

export const Account = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const { user, mutate } = useUser();

  const deactivate = async () => {
    try {
      await api.put('/clients/deactivate');

      mutate(old => ({ ...old, active: false }));
      Alert.alert(
        'Aviso',
        'Conta desativada! você não poderá acessar algumas telas agora'
      );
    } catch (err) {
      Alert.alert('Erro', 'Houve um problema ao desativar sua conta');
    }
  };

  const active = async () => {
    try {
      await api.put('/clients/activate');

      mutate(old => ({ ...old, active: true }));
      Alert.alert('Mensagem', 'Conta ativada!');
    } catch (err) {
      Alert.alert('Erro', 'Houve um problema ao ativar sua conta');
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

              dispatch(authActions.logout());
            } catch (err) {
              Alert.alert('Erro', 'Houve um erro deletar sua conta');
            }
          },
        },
        {
          text: 'Sair',
        },
      ]
    );
  };

  return (
    <Flex flex={1} px="20px">
      <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
        <Flex
          px="10px"
          py="15px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>Alterar senha</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity onPress={user.active ? deactivate : active}>
        <Flex
          px="10px"
          py="15px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>{`${user.active ? 'Desativar' : 'Ativar'} conta`}</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>
      <Divider />

      <TouchableOpacity onPress={destroy}>
        <Flex
          px="10px"
          py="15px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>Deletar conta</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>
      <Divider />
    </Flex>
  );
};

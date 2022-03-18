import { Alert, TouchableOpacity } from 'react-native';
import { Text, Flex, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useToast } from 'native-base';

import api from '@services/api';
import { useAppDispatch } from '@store/hooks';
import { useUser } from '@hooks';
import { authActions } from '@store/reducers/auth';

export const Account = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { data: user, mutate } = useUser();

  const deactivate = async () => {
    try {
      await api.put('/clients/deactivate');

      mutate(old => ({ ...old, active: false }));
      toast.show({
        w: '90%',
        title: 'Conta desativada!',
      });
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Erro',
        description: 'Houve um erro ao desativar a conta',
        status: 'error',
      });
    }
  };

  const active = async () => {
    try {
      await api.put('/clients/activate');

      mutate(old => ({ ...old, active: true }));
      toast.show({
        w: '90%',
        title: 'Conta ativada!',
      });
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Erro',
        description: 'Houve um erro ao ativar a conta',
        status: 'error',
      });
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

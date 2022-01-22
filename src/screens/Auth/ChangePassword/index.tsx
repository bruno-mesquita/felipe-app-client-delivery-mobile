import { TouchableOpacity } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import {
  Flex,
  Button,
  FormControl,
  Input,
  useToast,
  useDisclose,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '@services/api';

import schema from './schema';

export const ChangePassword = () => {
  const toast = useToast();

  const passwordCurrent = useDisclose(true);
  const newPassword = useDisclose(true);
  const newPasswordConfirm = useDisclose(true);

  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      if (values.newPassword === values.confirmNewPassword) {
        await api.put('/clients/update-password', values);

        toast.show({
          title: 'Sucesso!',
          description: 'Senha atualiza!',
          status: 'success',
          w: '90%',
        });
      } else {
        toast.show({
          title: 'Aviso',
          description: 'Senhas não são iguais',
          status: 'warning',
          w: '90%',
        });
      }
    } catch (err) {
      toast.show({
        title: 'Erro',
        description: 'Houve um erro atualizar a senha',
        status: 'error',
        w: '90%',
      });
    }
  };

  return (
    <Flex flex={1} mx="20px" align="center" justify="space-around">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Flex w="100%">
              <FormControl>
                <FormControl.Label>Senha atual</FormControl.Label>
                <Input
                  value={values.currentPassword}
                  onChangeText={handleChange('currentPassword')}
                  secureTextEntry={passwordCurrent.isOpen}
                  rightElement={
                    <TouchableOpacity onPress={passwordCurrent.onToggle}>
                      <MaterialCommunityIcons
                        color="#fff"
                        size={25}
                        style={{ marginRight: 10 }}
                        name={passwordCurrent.isOpen ? 'eye-off' : 'eye'}
                      />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="currentPassword"
                />
              </FormControl>

              <FormControl mt="30px">
                <FormControl.Label>Nova senha</FormControl.Label>
                <Input
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  secureTextEntry={newPassword.isOpen}
                  rightElement={
                    <TouchableOpacity onPress={newPassword.onToggle}>
                      <MaterialCommunityIcons
                        color="#fff"
                        size={25}
                        style={{ marginRight: 10 }}
                        name={newPassword.isOpen ? 'eye-off' : 'eye'}
                      />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="newPassword"
                />
              </FormControl>

              <FormControl mt="10px">
                <FormControl.Label>Confirmar senha</FormControl.Label>
                <Input
                  value={values.confirmNewPassword}
                  onChangeText={handleChange('confirmNewPassword')}
                  secureTextEntry={newPasswordConfirm.isOpen}
                  rightElement={
                    <TouchableOpacity onPress={newPasswordConfirm.onToggle}>
                      <MaterialCommunityIcons
                        color="#fff"
                        size={25}
                        style={{ marginRight: 10 }}
                        name={newPasswordConfirm.isOpen ? 'eye-off' : 'eye'}
                      />
                    </TouchableOpacity>
                  }
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="confirmNewPassword"
                />
              </FormControl>
            </Flex>
            <Button w="70%" variant="inverted" onPress={() => handleSubmit()}>
              Atualizar
            </Button>
          </>
        )}
      </Formik>
    </Flex>
  );
};

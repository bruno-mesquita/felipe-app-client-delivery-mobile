import { Text, TouchableOpacity } from 'react-native';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { useToast, Button, Flex, FormControl, Input } from 'native-base';

import { ScreenNotAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

import { Layout } from '../_Layout';

import schema from './schema';
import type { Values } from './props';

export const CodeToPassword = ({
  navigation,
  route,
}: ScreenNotAuthProps<'CodeToPassword'>) => {
  const toast = useToast();

  const initialValues: Values = {
    code: '',
    cellphone: route.params.cellphone,
    newPassword: '',
    confirmPassword: '',
  };

  const resendCode = async () => {
    try {
      const body = {
        cellphone: route.params.cellphone,
      };

      await api.put('/auth/resend-code', body);

      toast.show({
        title: 'Código reenviado com sucesso!',
        status: 'info',
      });
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Houve um erro!',
        description: message,
        status: 'error',
      });
    }
  };

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      await api.put('/auth/reset-password', values);

      toast.show({
        title: 'Senha atualizada!',
        status: 'success',
      });
      navigation.navigate('Login');
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Houve um erro!',
        description: message,
        status: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ values, submitForm, handleChange, isSubmitting }) => (
          <Flex align="center" w="100%">
            <FormControl w="90%">
              <FormControl.Label _text={{ color: '#fff' }}>
                Código
              </FormControl.Label>
              <Input
                value={values.code}
                placeholder="Código"
                onChangeText={handleChange('code')}
              />
              <ErrorMessage component={FormControl.ErrorMessage} name="code" />
            </FormControl>

            <FormControl w="90%" mt="10px">
              <FormControl.Label _text={{ color: '#fff' }}>
                Nova senha
              </FormControl.Label>
              <Input
                value={values.newPassword}
                placeholder="Nova senha"
                onChangeText={handleChange('newPassword')}
                secureTextEntry
              />
              <ErrorMessage
                component={FormControl.ErrorMessage}
                name="newPassword"
              />
            </FormControl>

            <FormControl w="90%" mt="10px">
              <FormControl.Label _text={{ color: '#fff' }}>
                Confirmar senha
              </FormControl.Label>
              <Input
                value={values.confirmPassword}
                placeholder="Confirmar senha"
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
              />
              <ErrorMessage
                component={FormControl.ErrorMessage}
                name="confirmPassword"
              />
            </FormControl>

            <TouchableOpacity onPress={resendCode}>
              <Text style={{ color: '#fff', marginTop: 20 }}>
                Reenviar código
              </Text>
            </TouchableOpacity>

            <Button
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              w="70%"
              mt="20px"
              onPress={() => submitForm()}
            >
              Confirmar
            </Button>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
};

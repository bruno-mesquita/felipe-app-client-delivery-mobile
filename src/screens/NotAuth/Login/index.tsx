import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import {
  useToast,
  FormControl,
  Input,
  Stack,
  Button,
  Text,
  Flex,
} from 'native-base';
import { Feather } from '@expo/vector-icons';

import { useAppDispatch } from '@store/hooks';
import { authActions } from '@store/reducers/auth';
import { ScreenNotAuthProps } from '@utils/ScreenProps';

import { Layout } from '../_Layout';
import schema from './schema';
import { Values } from './types';

export const Login = ({ navigation }: ScreenNotAuthProps<'Login'>) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    try {
      await dispatch(authActions.fetchLogin(values)).unwrap();
    } catch (err) {
      toast.show({
        w: '80%',
        title: 'Erro',
        description: err.message,
        status: 'error',
      });
      resetForm();
    } finally {
      setSubmitting(false);
    }
  };

  const forgotPassword = () => navigation.navigate('ForgotPassword');
  const goRegister = () => navigation.navigate('Register');

  return (
    <Layout>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
          errors,
          touched,
        }) => (
          <Flex align="center" w="90%">
            <FormControl isInvalid={!!(touched?.email && errors?.email)}>
              <Stack>
                <FormControl.Label _text={{ color: '#fff' }}>
                  Email
                </FormControl.Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="E-mail"
                />
                <FormControl.ErrorMessage
                  alignSelf="center"
                  _text={{
                    color: '#fff',
                    fontSize: 'sm',
                  }}
                >
                  {errors.email}
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>

            <FormControl
              mt="10px"
              isInvalid={!!(touched?.email && errors?.email)}
            >
              <Stack>
                <FormControl.Label _text={{ color: '#fff' }}>
                  Senha
                </FormControl.Label>
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Senha"
                  rightElement={
                    <Feather
                      onPress={() => setPasswordVisible(old => !old)}
                      name={passwordVisible ? 'eye' : 'eye-off'}
                      size={20}
                      color="#fff"
                      style={{ marginRight: 10 }}
                    />
                  }
                />
                <FormControl.ErrorMessage
                  alignSelf="center"
                  _text={{
                    color: '#fff',
                    fontSize: 'sm',
                  }}
                >
                  {errors.password}
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>

            <Flex w="100%" my="15px" alignItems="flex-end">
              <TouchableOpacity onPress={forgotPassword}>
                <Text color="#fff">Esqueci minha senha</Text>
              </TouchableOpacity>
            </Flex>

            <Button
              w="80%"
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              onPress={() => handleSubmit()}
              mb="20px"
            >
              Login
            </Button>
            <Button w="80%" onPress={goRegister}>
              Criar conta
            </Button>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
};

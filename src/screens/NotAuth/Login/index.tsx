import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import {
  useToast,
  FormControl,
  Input,
  Stack,
  Center,
  Button,
  Text,
  Box,
} from 'native-base';

import { loginAction } from '@store/ducks/auth/auth.actions';
import { ScreenNotAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

import { Layout } from '../_Layout';

import schema from './schema';
import { Values } from './types';

export const Login = ({ navigation }: ScreenNotAuthProps<'Login'>) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = async (
    { email, password }: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });

      dispatch(loginAction(data.result.token, data.result.refreshToken));

      api.defaults.headers.common.Authorization = `Bearer ${data.result.token}`;
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Houve um erro',
        description: message || '',
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
          <Center flex={1} px="3">
            <FormControl
              isRequired
              isInvalid={!!(touched?.email && errors?.email)}
            >
              <Stack>
                <FormControl.Label
                  _text={{
                    color: '#fff',
                  }}
                >
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
              isRequired
              isInvalid={!!(touched?.email && errors?.email)}
            >
              <Stack>
                <FormControl.Label
                  _text={{
                    color: '#fff',
                  }}
                >
                  Senha
                </FormControl.Label>
                <Input
                  type="password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Senha"
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

            <Box w="100%" my="15px" alignItems="flex-end">
              <TouchableOpacity onPress={forgotPassword}>
                <Text color="#fff">Esqueci minha senha</Text>
              </TouchableOpacity>
            </Box>

            <Button
              w="80%"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              onPress={() => handleSubmit()}
              mb="20px"
            >
              Login
            </Button>
            <Button w="80%" onPress={goRegister}>
              Criar conta
            </Button>
          </Center>
        )}
      </Formik>
    </Layout>
  );
};

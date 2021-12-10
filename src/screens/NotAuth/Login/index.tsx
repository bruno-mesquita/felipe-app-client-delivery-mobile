import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';

import { loginAction } from '@store/ducks/auth/auth.actions';
import { ScreenNotAuthProps } from '@utils/ScreenProps';
import { Field, FieldSecure } from '../../../components/FormUtils';
import { Button } from '../../../components';
import { Layout } from '../_Layout';

import {
  ErrorComponent,
  Form,
  ContainerButton,
  ContainerInput,
  ForgotPassword,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';
import schema from './schema';
import { Values } from './types';
import api from '@services/api';

export const Login = ({ navigation }: ScreenNotAuthProps<'Login'>) => {
  const dispatch = useDispatch();

  const onSubmit = async (
    { email, password }: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });

      dispatch(loginAction(data.token, data.refreshToken));

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    } catch (err) {
      Alert.alert('Credenciais invalidas', 'Email ou senha estão incorretos');
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
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <Form>
            <ContainerInput>
              <Field
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="E-mail"
                label="E-mail"
              />
              <ErrorComponent name="email" />

              <FieldSecure
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Senha"
                label="Senha"
              />
              <ErrorComponent name="password" />
            </ContainerInput>

            <ForgotPassword>
              <ForgotPasswordButton>
                <ForgotPasswordText onPress={forgotPassword}>
                  Esqueci minha senha
                </ForgotPasswordText>
              </ForgotPasswordButton>
            </ForgotPassword>

            <ContainerButton>
              <Button
                disabled={isSubmitting}
                loading={isSubmitting}
                onPress={() => handleSubmit()}
              >
                Login
              </Button>
              <Button onPress={goRegister}>Criar conta</Button>
            </ContainerButton>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

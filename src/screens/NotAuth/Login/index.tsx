import { Alert } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import { useAuth } from '@contexts/AuthContext';
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

export const Login = ({ navigation }: ScreenNotAuthProps<'Login'>) => {
  const { signIn } = useAuth();

  const onSubmit = async ({ email, password }: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    try {
      const result = await signIn(email, password);

      if (!result) throw new Error();
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
      <Formik initialValues={{ email: '', password: '', checked: false }} onSubmit={onSubmit} validationSchema={schema}>
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
                <ForgotPasswordText onPress={forgotPassword}>Esqueci minha senha</ForgotPasswordText>
              </ForgotPasswordButton>
            </ForgotPassword>

            <ContainerButton>
              <Button disabled={isSubmitting} loading={isSubmitting} onPress={() => handleSubmit()}>
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

import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Text } from 'react-native';

import { Field, FieldSecure } from '../../../components/FormUtils';
import { Button } from '../../../components';
import { Checkbox } from './Components';
import { Layout } from '../_Layout';

import {
  Error,
  Form,
  ContainerButton,
  ContainerInput,
  ForgotPassword,
  ForgotPasswordButton,
  ForgotPasswordText,
  StayConnect,
} from './styles';

import { ScreenNotAuthProps } from '@utils/ScreenProps';
import { requestLogin } from '@store/ducks/auth/auth.actions';
import schema from './schema';
import { Values } from './types';

export const Login = ({ navigation }: ScreenNotAuthProps<'Login'>) => {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ auth }) => auth);

  const onSubmit = ({ email, password, checked }: Values) => {
    dispatch(requestLogin(email, password, checked));
  };

  const forgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Layout>
      <Formik
        initialValues={{ email: '', password: '', checked: false }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <Form>
            <ContainerInput>
              <Field
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="E-mail"
                label="E-mail"
              />
              <Error name="email" />

              <FieldSecure
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Senha"
                label="Senha"
              />
              <Error name="password" />
            </ContainerInput>

            <ForgotPassword>
              <ForgotPasswordButton>
                <ForgotPasswordText onPress={forgotPassword}>
                  Esqueci minha senha
                </ForgotPasswordText>
              </ForgotPasswordButton>
            </ForgotPassword>

            <StayConnect>
              <Checkbox
                checked={values.checked}
                onChange={value => setFieldValue('checked', value)}
              >
                <Text style={{ color: '#fff' }}>Mantenhe-me conectado</Text>
              </Checkbox>
            </StayConnect>

            <ContainerButton>
              <Button
                disabled={loading}
                loading={loading}
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

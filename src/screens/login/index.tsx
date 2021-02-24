import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Form,
  ContainerLogo,
  LogoTestText,
  ContainerButton,
  ContainerInput,
  Input,
  ForgotPassword,
  ForgotPasswordButton,
  ForgotPasswordText,
  LoginButton,
  LoginButtonText,
  Item,
} from './styles';

import {
  requestLogin,
  requestLoginSuccess,
} from '../../store/ducks/auth/auth.actions';
import schema from './schema';
import { Values } from './types';

function login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = ({ email, password }: Values) => {
    /* dispatch(requestLogin(email, password)); */

    /* Login Mock */
    dispatch(requestLoginSuccess({ email, name: 'Bruno' }, 'token'));
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <ContainerLogo>
        <LogoTestText>Flipp</LogoTestText>
        <LogoTestText>Delivery</LogoTestText>
      </ContainerLogo>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ handleBlur, handleSubmit, handleChange, values }) => (
          <Form>
            <ContainerInput>
              <Item rounded style={{ borderColor: '#770202' }}>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="E-mail"
                />
              </Item>
              <ErrorMessage name="email" component={Text} />

              <Item rounded secureTextEntry style={{ borderColor: '#770202' }}>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Senha"
                  secureTextEntry
                />
              </Item>
              <ErrorMessage name="password" component={Text} />
            </ContainerInput>

            <ForgotPassword>
              <ForgotPasswordButton>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPasswordButton>
            </ForgotPassword>

            <ContainerButton>
              <LoginButton onPress={() => handleSubmit()}>
                <LoginButtonText>Login</LoginButtonText>
              </LoginButton>

              <LoginButton onPress={goRegister}>
                <LoginButtonText>Criar conta</LoginButtonText>
              </LoginButton>
            </ContainerButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default login;

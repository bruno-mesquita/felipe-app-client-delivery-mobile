import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Text } from 'react-native';

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
} from './styles';

import { requestLogin } from '../../store/ducks/auth/auth.actions';
import schema from './schema';
import { Values } from './types';

function login() {
  /* const dispatch = useDispatch(); */

  const onSubmit = ({ email, password }: Values) => {
    console.log(email);
    console.log(password);
    /* dispatch(requestLogin(email, password)); */
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
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="E-mail"
                placeholderTextColor="#fff"
              />
              <ErrorMessage name="email" component={Text} />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Senha"
                placeholderTextColor="#fff"
                secureTextEntry
              />
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

              <LoginButton>
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

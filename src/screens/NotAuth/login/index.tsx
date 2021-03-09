import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Field } from '../../../components/Field';
import { Button as ButtonLogin } from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';

import {
  Container,
  BackGround,
  Form,
  ContainerLogo,
  Logo,
  ContainerButton,
  ContainerInput,
  ForgotPassword,
  ForgotPasswordButton,
  ForgotPasswordText,
  StayConnect,
} from './styles';

import {
  requestLogin,
  requestLoginSuccess,
} from '../../../store/ducks/auth/auth.actions';
import schema from './schema';
import { Values } from './types';

function login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = ({ email, password }: Values) => {
    /* dispatch(requestLogin(email, password)); */

    /* Login Mock */
    dispatch(
      requestLoginSuccess(
        {
          email,
          name: 'Mia khalifa',
          phone: '00000000000',
          cpf: '00000000000',
          addresses: [],
        },
        'token',
      ),
    );
  };

  const forgotPassword = () => {
    navigation.navigate('Forgotpassword');
  };

  const goRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {({ handleBlur, handleSubmit, handleChange, values }) => (
            <Form>
              <ContainerInput>
                <Field
                  onChangeText={handleChange('email')} // Aqui ta bugado.
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="E-mail"
                  textValue="E-mail"
                />
                <ErrorMessage
                  style={{ color: '#fff' }}
                  name="email"
                  component={Text}
                />

                <Field
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Senha"
                  secureTextEntry
                  textValue="Senha"
                  iconName="eye"
                  iconColor="white"
                  iconSize={24}
                />
                <ErrorMessage
                  style={{ color: '#fff' }}
                  name="password"
                  component={Text}
                />
              </ContainerInput>

              <ForgotPassword>
                <ForgotPasswordButton>
                  <ForgotPasswordText onPress={() => forgotPassword()}>
                    Esqueci minha senha
                  </ForgotPasswordText>
                </ForgotPasswordButton>
              </ForgotPassword>

              <StayConnect>
                <CheckBox children="Mantenhe-me conectado" borderRadius={6} />
              </StayConnect>

              <ContainerButton>
                <ButtonLogin onPress={() => handleSubmit()}>Login</ButtonLogin>
                <ButtonLogin
                  onPress={() => {
                    goRegister();
                  }}
                >
                  Criar conta
                </ButtonLogin>
              </ContainerButton>
            </Form>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
}

export default login;

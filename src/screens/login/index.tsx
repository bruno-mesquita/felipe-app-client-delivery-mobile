import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/images/logo.png';
import { Field } from '../../components/Field';
import { Button } from '../../components/Button';
import CheckBox from '../../components/CheckBox';

import {
  Container,
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
        <Logo source={logo} />
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
              <ErrorMessage name="email" component={Text} />

              <Field
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Senha"
                secureTextEntry
                textValue="Senha"
              />
              <ErrorMessage name="password" component={Text} />
            </ContainerInput>

            <ForgotPassword>
              <ForgotPasswordButton>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPasswordButton>
            </ForgotPassword>

            <StayConnect>
              <CheckBox />
            </StayConnect>

            <ContainerButton>
              <Button
                onPress={() => handleSubmit()}
                key={values.email}
                value="Login"
              />

              <Button
                onPress={() => handleSubmit()}
                key={values.email}
                value="Criar conta"
              />
            </ContainerButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default login;

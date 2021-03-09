import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ErrorMessage, Formik } from 'formik';

import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';

import {
  Container,
  BackGround,
  ContainerLogo,
  Logo,
  ContentForm,
  ContainerInput,
  ContainerButton,
} from './styles';

interface Values {
  code: string;
}

const CodeToForgotPassword = () => {
  const navigation = useNavigation();

  const codeValue: Values = {
    code: '',
  };

  const onSubmit = (values: Values) => {
    console.log(values);
    navigation.navigate('Code');
  };

  const changePassword = () => {
    navigation.navigate('Changeconfirmpassword');
  };

  const goBackToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik initialValues={codeValue} onSubmit={onSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <ContentForm>
              <ContainerInput>
                <Field
                  value={values.code}
                  placeholder="Código"
                  onChangeText={handleChange('code')}
                  textValue="Código"
                />
                <ErrorMessage component={Text} name="code" />
              </ContainerInput>

              <ContainerButton>
                <Button
                  style={{ marginBottom: 50 }}
                  onPress={() => handleSubmit()}
                >
                  Reenviar código
                </Button>

                <Button onPress={() => changePassword()}>Confirmar</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

export default CodeToForgotPassword;

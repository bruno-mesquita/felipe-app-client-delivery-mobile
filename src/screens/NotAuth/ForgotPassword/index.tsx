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

const ForgotPassword = () => {
  const navigation = useNavigation();

  const codeValue: Values = {
    code: '',
  };

  const onSubmit = (values: Values) => {
    console.log(values);
    navigation.navigate('Code');
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
                  placeholder="E-mail"
                  onChangeText={handleChange('code')}
                  textValue="E-mail"
                />
                <ErrorMessage component={Text} name="code" />
              </ContainerInput>

              <ContainerButton>
                <Button onPress={() => handleSubmit()}>Enviar</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

export default ForgotPassword;

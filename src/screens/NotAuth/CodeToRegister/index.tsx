import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ErrorMessage, Formik } from 'formik';
import { AxiosError } from 'axios';

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
import api from '../../../services/api';

interface Values {
  id: string;
  code: string;
}

const CodeToRegister = ({ route }) => {
  const navigation = useNavigation();

  const codeValue: Values = {
    id: route.params.id,
    code: '',
  };

  const onSubmit = async (values: Values) => {
    try {
      console.log(values);

      const { status } = await api.post('/client/activate', values);

      if (status === 200) {
        login();
      }
    } catch (err) {
      const error = err as AxiosError;
      // console.log(error.request);
    }
  };

  const resendCode = async () => {
    console.log('Parei aqui !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  const login = () => {
    navigation.navigate('Login');
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

                <Button onPress={() => handleSubmit()}>Confirmar</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

export default CodeToRegister;

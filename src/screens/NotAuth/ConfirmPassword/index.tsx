import React from 'react';
import { Text } from 'react-native';
import { ErrorMessage, Formik } from 'formik';

import { Button } from '@components';
import { Field } from '@form';
import { ScreenNotAuthProps } from '@utils/ScreenProps';

import {
  Container,
  BackGround,
  ContainerLogo,
  Logo,
  ContentForm,
  ContainerInput,
  ContainerButton,
} from './styles';
import { Values } from './props';

export const CodeToPassword = ({
  navigation,
}: ScreenNotAuthProps<'CodeToPassword'>) => {
  const codeValue: Values = {
    newPassword: '',
    confirmPassword: '',
  };

  const onSubmit = (values: Values) => {
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
                  value={values.newPassword}
                  placeholder="Nova senha"
                  onChangeText={handleChange('newPassword')}
                  label="Nova senha"
                />
                <ErrorMessage component={Text} name="newPassword" />
              </ContainerInput>

              <ContainerInput>
                <Field
                  value={values.confirmPassword}
                  placeholder="Confirmar senha"
                  onChangeText={handleChange('confirmPassword')}
                  label="Confirmar senha"
                />
                <ErrorMessage component={Text} name="confirmPassword" />
              </ContainerInput>

              <ContainerButton>
                <Button onPress={() => handleSubmit()}>Salvar</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
/* import TextInputMask from 'react-native-text-input-mask'; */
import { Content, Item, Input } from 'native-base';

import { registerUserRequest } from '../../store/ducks/user/user.actions';
import { Container, Button, ButtonText, DivField, Field } from './styles';
import { Values } from './types';
/* import schema from './schema'; */

const Register = () => {
  const dispatch = useDispatch();

  const initialValues: Values = {
    name: '',
    cpf: '',
    email: '',
    cellphone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  };

  const onSubmit = (values: Values) => {
    console.log(values);
    // dispatch(registerUserRequest(values))
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        /* validationSchema={schema} */
      >
        {({ values, handleSubmit, handleChange }) => (
          <Content>
            <Item rounded>
              <Input value={values.name} onChangeText={handleChange('name')} />
              <ErrorMessage component={Text} name="name" />
            </Item>

            <DivField>
              <Field value={values.email} />
              <ErrorMessage component={Text} name="email" />
            </DivField>
            {/*
            <DivField>
              <TextInputMask
                value={values.cpf}
                onChangeText={handleChange('cpf')}
                mask={'[000].[000].[000]-[00]'}
              />
              <ErrorMessage component={Text} name="cpf" />
            </DivField>

            <DivField>
              <TextInputMask
                value={values.cellphone}
                onChangeText={handleChange('cellphone')}
                mask={'[00] [00000]-[0000]'}
              />
              <ErrorMessage component={Text} name="cellphone" />
            </DivField> */}

            <DivField>
              <Field value={values.password} secureTextEntry />
              <ErrorMessage component={Text} name="password" />
            </DivField>

            <DivField>
              <Field value={values.confirmPassword} secureTextEntry />
              <ErrorMessage component={Text} name="confirmPassword" />
            </DivField>

            <DivField>
              <Field value={values.dateOfBirth} />
              <ErrorMessage component={Text} name="dateOfBirth" />
            </DivField>

            <DivField>
              <Button onPress={() => handleSubmit()}>
                <ButtonText>Cadastrar</ButtonText>
              </Button>
            </DivField>
          </Content>
        )}
      </Formik>
    </Container>
  );
};

export default Register;

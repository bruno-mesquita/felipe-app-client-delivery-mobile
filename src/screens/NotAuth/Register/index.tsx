import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import { Field } from '../../../components/Field';
import { Button as ButtonLogin } from '../../../components/Button';
import { Values } from './types';
import api from '../../../services/api';
import schema from './schema';
import { AxiosError, AxiosResponse } from 'axios';
import { ApiResult } from '../../../utils/ApiResult';

import {
  Container,
  BackGround,
  ContainerLogo,
  ContentForm,
  Logo,
  DivField,
  SelectContainer,
  SelectContent,
  styles,
} from './styles';

const Register = () => {
  const navigation = useNavigation();

  const [states, setStates] = useState<Item[]>([]);
  const [cities, setCities] = useState<Item[]>([]);

  useEffect(() => {
    api.get(`/states`).then(({ data }) => {
      setStates(data.map(state => ({ label: state.name, value: state.id })));
    });
  }, []);

  const onChangeState = useCallback((stateId: string) => {
    api.get(`/state/${stateId}`).then(({ data }) => {
      console.log(data);
      setCities(
        data.result.map(cities => ({
          value: cities.id,
          label: cities.name,
        })),
      );
    });
  }, []);

  const initialValues: Values = {
    name: '',
    cpf: '',
    email: '',
    cellphone: '',
    city: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values: Values) => {
    try {
      const { data }: AxiosResponse<ApiResult<string>> = await api.post(
        '/clients',
        values,
      );

      takeCode(data.result);
    } catch (err) {
      const error = err as AxiosError;
    }
  };

  const takeCode = (id: string) => {
    navigation.navigate('Code', { id });
  };

  return (
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {({ values, handleSubmit, handleChange, setFieldValue }) => (
            <ContentForm>
              <DivField>
                <Field
                  value={values.name}
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  textValue="Nome"
                />
                <ErrorMessage component={Text} name="name" />
              </DivField>

              <DivField>
                <Field
                  value={values.cpf}
                  placeholder="CPF"
                  onChangeText={handleChange('cpf')}
                  textValue="CPF"
                />
                <ErrorMessage component={Text} name="email" />
              </DivField>

              <DivField>
                <Field
                  value={values.email}
                  placeholder="E-mail"
                  onChangeText={handleChange('email')}
                  textValue="E-mail"
                />
                <ErrorMessage component={Text} name="password" />
              </DivField>

              <DivField>
                <Field
                  value={values.cellphone}
                  placeholder="Celular"
                  onChangeText={handleChange('cellphone')}
                  textValue="Celular"
                />
                <ErrorMessage component={Text} name="confirmPassword" />
              </DivField>

              <SelectContainer>
                <SelectContent>
                  <Text
                    style={{ color: '#fff', fontSize: 16, marginBottom: 2 }}
                  >
                    Estado
                  </Text>
                  <RNPickerSelect
                    placeholder={{ label: 'Estado' }}
                    useNativeAndroidPickerStyle={false}
                    style={{ inputAndroid: styles.select }}
                    onValueChange={(value, index) => onChangeState(value)}
                    items={states}
                  />
                  <ErrorMessage component={Text} name="confirmPassword" />
                </SelectContent>

                <SelectContent>
                  <Text
                    style={{ color: '#fff', fontSize: 16, marginBottom: 2 }}
                  >
                    Cidade
                  </Text>
                  <RNPickerSelect
                    placeholder={{ label: 'Cidade' }}
                    useNativeAndroidPickerStyle={false}
                    value={values.city}
                    style={{ inputAndroid: styles.select }}
                    onValueChange={value => setFieldValue('city', value)}
                    items={cities}
                  />
                  <ErrorMessage component={Text} name="confirmPassword" />
                </SelectContent>
              </SelectContainer>

              <DivField>
                <Field
                  value={values.password}
                  placeholder="Senha"
                  onChangeText={handleChange('password')}
                  textValue="Senha"
                />
                <ErrorMessage component={Text} name="dateOfBirth" />
              </DivField>

              <DivField>
                <Field
                  value={values.confirmPassword}
                  placeholder="Confimar senha"
                  onChangeText={handleChange('confirmPassword')}
                  textValue="Confimar senha"
                />
                <ErrorMessage component={Text} name="dateOfBirth" />
              </DivField>

              <DivField style={{ marginTop: 15 }}>
                <ButtonLogin onPress={handleSubmit}>Cadastrar</ButtonLogin>
              </DivField>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

export default Register;

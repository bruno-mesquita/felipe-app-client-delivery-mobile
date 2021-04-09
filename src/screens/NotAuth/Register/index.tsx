import React, { useCallback, useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { Formik, ErrorMessage } from 'formik';
import { AxiosError } from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

import { Field } from '../../../components/Field';
import { Button as ButtonLogin } from '../../../components/Button';
import { Values } from './types';
import api from '../../../services/api';
import schema from './schema';

import { ApiResult } from '../../../utils/ApiResult';

import {
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

  const getStates = useCallback(async () => {
    try {
      const { data } = await api.get(`/states`);

      setStates(data.map(state => ({ label: state.name, value: state.id })));
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getStates();
  }, [getStates]);

  const onChangeState = async (stateId: string) => {
    try {
      const { data } = await api.get(`/state/${stateId}`);

      setCities(
        data.result.map(cities => ({
          value: cities.id,
          label: cities.name,
        })),
      );
    } catch (err) {
      const error = err as AxiosError;
    }
  };

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
      const { data } = await api.post<ApiResult<string>>('/clients', values);

      takeCode(data.result);
    } catch (err) {
      const error = err as AxiosError;
    }
  };

  const takeCode = (id: string) => {
    navigation.navigate('Code', { id });
  };

  const LabelSelect = ({ children }) => (
    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 2 }}>
      {children}
    </Text>
  );

  return (
    <ScrollView>
      <BackGround
        style={{ flex: 1 }}
        source={require('../../../assets/images/fundo.png')}
      >
        <ContainerLogo>
          <Logo
            resizeMode="cover"
            source={require('../../../assets/images/logo.png')}
          />
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
                <ErrorMessage component={Text} name="cpf" />
              </DivField>

              <DivField>
                <Field
                  value={values.email}
                  placeholder="E-mail"
                  onChangeText={handleChange('email')}
                  textValue="E-mail"
                />
                <ErrorMessage component={Text} name="email" />
              </DivField>

              <DivField>
                <Field
                  value={values.cellphone}
                  placeholder="Celular"
                  onChangeText={handleChange('cellphone')}
                  textValue="Celular"
                />
                <ErrorMessage component={Text} name="cellphone" />
              </DivField>

              <SelectContainer>
                <SelectContent>
                  <LabelSelect>Estado</LabelSelect>
                  <RNPickerSelect
                    placeholder={{ label: 'Estado' }}
                    Icon={() => (
                      <MaterialIcons
                        name="arrow-drop-down"
                        color="#fff"
                        size={25}
                        style={{
                          paddingTop: 8,
                          height: 43,
                        }}
                      />
                    )}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: styles.select,
                    }}
                    onValueChange={onChangeState}
                    items={states}
                  />
                  <ErrorMessage component={Text} name="state" />
                </SelectContent>

                <SelectContent>
                  <LabelSelect>Cidade</LabelSelect>
                  <RNPickerSelect
                    placeholder={{ label: 'Cidade' }}
                    Icon={() => (
                      <MaterialIcons
                        name="arrow-drop-down"
                        color="#fff"
                        size={25}
                        style={{
                          paddingTop: 8,
                          height: 43,
                        }}
                      />
                    )}
                    useNativeAndroidPickerStyle={false}
                    value={values.city}
                    style={{ inputAndroid: styles.select }}
                    onValueChange={value => setFieldValue('city', value)}
                    items={cities}
                  />
                  <ErrorMessage component={Text} name="city" />
                </SelectContent>
              </SelectContainer>

              <DivField>
                <Field
                  value={values.password}
                  placeholder="Senha"
                  onChangeText={handleChange('password')}
                  textValue="Senha"
                />
                <ErrorMessage component={Text} name="password" />
              </DivField>

              <DivField>
                <Field
                  value={values.confirmPassword}
                  placeholder="Confimar senha"
                  onChangeText={handleChange('confirmPassword')}
                  textValue="Confimar senha"
                />
                <ErrorMessage component={Text} name="confirmPassword" />
              </DivField>

              <DivField style={{ marginTop: 15 }}>
                <ButtonLogin onPress={handleSubmit}>Cadastrar</ButtonLogin>
              </DivField>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </ScrollView>
  );
};

export default Register;

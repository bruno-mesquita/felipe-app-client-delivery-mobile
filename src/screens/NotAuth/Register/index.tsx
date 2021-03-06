import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

import { Field } from '../../../components/Field';
import { Button as ButtonLogin } from '../../../components/Button';
import {
  Container,
  BackGround,
  BackButton,
  BackScreen,
  ContainerLogo,
  ContentForm,
  Logo,
  DivField,
  SelectContainer,
  SelectContent,
} from './styles';
import { Values } from './types';
import { requestLogin } from '../../../store/ducks/auth/auth.actions';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const initialValues: Values = {
    name: '',
    cpf: '',
    email: '',
    cellphone: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values: Values) => {
    console.log(values);
    // dispatch(registerUserRequest(values));
  };

  const goBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <BackButton onPress={() => goBackToLogin()}>
            <BackScreen name="arrow-back" />
          </BackButton>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          /* validationSchema={schema} */
        >
          {({ values, handleSubmit, handleChange }) => (
            <ContentForm>
              <DivField>
                {/* <Input value={values.name} onChangeText={handleChange('name')} /> */}
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
                    Cidade
                  </Text>
                  <RNPickerSelect
                    placeholder={{ label: 'Cidade' }}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: {
                        width: 120,
                        height: 43,
                        paddingLeft: 8,
                        backgroundColor: '#770202',
                        color: '#fff',
                        borderRadius: 10,
                      },
                    }}
                    onValueChange={value => console.log(value)}
                    items={[
                      { label: 'São José', value: 'São José' },
                      { label: 'Taubaté', value: 'Taubaté' },
                      { label: 'Pinda', value: 'Pinda' },
                    ]}
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
                    placeholder={{ label: 'Estado' }}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputAndroid: {
                        width: 120,
                        height: 43,
                        paddingLeft: 8,
                        backgroundColor: '#770202',
                        color: '#fff',
                        borderRadius: 10,
                      },
                    }}
                    onValueChange={value => console.log(value)}
                    items={[
                      { label: 'São Paulo', value: 'São Paulo' },
                      { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
                      { label: 'Bahia', value: 'Bahia' },
                    ]}
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

              <DivField style={{ marginTop: 20 }}>
                <ButtonLogin onPress={() => handleSubmit()}>
                  Cadastrar
                </ButtonLogin>
              </DivField>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

export default Register;

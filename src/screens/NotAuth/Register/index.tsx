import React, { useRef } from 'react';
import { ScrollView, Alert } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { TextInputMasked } from 'react-native-masked-text';

import { Field, Select, FieldMask, FieldSecure } from '@form';
import { Button } from '@components';
import { getApi } from '@services/api';
import { ApiResult } from '@utils/ApiResult';
import { ScreenNotAuthProps } from '@utils/ScreenProps';

import { Layout } from '../_Layout';
import { Values } from './types';
import schema from './schema';
import { ContentForm, DivField, Error } from './styles';

export const Register = ({ navigation }: ScreenNotAuthProps<'Register'>) => {
  const cpfInputRef = useRef<TextInputMasked>(null);
  const celInputRef = useRef<TextInputMasked>(null);

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

  const onSubmit = async (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>,
  ) => {
    try {
      const api = getApi();

      const body = {
        ...values,
        cellphone: celInputRef.current?.getRawValue(),
        cpf: cpfInputRef.current?.getRawValue(),
      };

      const { data } = await api.post<ApiResult<number>>('/clients', body);

      setSubmitting(false);

      navigation.navigate('CodeToRegister', { id: data.result });
    } catch (err) {
      setSubmitting(false);
      Alert.alert('Erro ao criar o usuário, reveja seus dados');
    }
  };

  return (
    <ScrollView>
      <Layout>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            setFieldValue,
            isSubmitting,
          }) => (
            <ContentForm>
              <DivField>
                <Field
                  value={values.name}
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                  label="Nome"
                />
              </DivField>
              <Error name="name" />

              <DivField>
                <FieldMask
                  type="cpf"
                  value={values.cpf}
                  placeholder="CPF"
                  onChangeText={handleChange('cpf')}
                  label="CPF"
                  maskRef={cpfInputRef}
                />
              </DivField>
              <Error name="cpf" />

              <DivField>
                <Field
                  autoCapitalize="none"
                  value={values.email}
                  placeholder="E-mail"
                  onChangeText={handleChange('email')}
                  label="E-mail"
                />
              </DivField>
              <Error name="email" />

              <DivField>
                <FieldMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  value={values.cellphone}
                  placeholder="Celular"
                  onChangeText={handleChange('cellphone')}
                  label="Celular"
                  maskRef={celInputRef}
                />
              </DivField>
              <Error name="cellphone" />

              <DivField>
                <Select
                  label="Estado"
                  onChange={value => setFieldValue('state', value)}
                  path="/states"
                  value={values.state}
                  placeholder="Selecione um estado"
                />
              </DivField>
              <Error name="state" />

              <DivField>
                <Select
                  label="Cidade"
                  onChange={value => setFieldValue('city', value)}
                  path={`/cities/${values.state}`}
                  value={values.city}
                  placeholder="Selecione uma cidade"
                />
              </DivField>
              <Error name="city" />

              <DivField>
                <FieldSecure
                  value={values.password}
                  placeholder="Senha"
                  onChangeText={handleChange('password')}
                  label="Senha"
                />
              </DivField>
              <Error name="password" />

              <DivField>
                <FieldSecure
                  value={values.confirmPassword}
                  placeholder="Confimar senha"
                  onChangeText={handleChange('confirmPassword')}
                  label="Confimar senha"
                />
              </DivField>
              <Error name="confirmPassword" />

              <DivField style={{ marginTop: 15 }}>
                <Button loading={isSubmitting} onPress={() => handleSubmit()}>
                  Cadastrar
                </Button>
              </DivField>
            </ContentForm>
          )}
        </Formik>
      </Layout>
    </ScrollView>
  );
};

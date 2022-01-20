import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { Formik, FormikHelpers, ErrorMessage } from 'formik';
import { TextInputMasked } from 'react-native-masked-text';
import {
  useToast,
  Flex,
  Input,
  FormControl,
  Select,
  Checkbox,
  Button,
} from 'native-base';

import { FieldMask, FieldSecure } from '@form';
import api from '@services/api';
import { ScreenNotAuthProps } from '@utils/ScreenProps';

import { Layout } from '../_Layout';
import { Values } from './types';
import schema from './schema';
import { useGetStates, useGetCities } from '@hooks';

export const Register = ({ navigation }: ScreenNotAuthProps<'Register'>) => {
  const toast = useToast();

  const [checked, setChecked] = useState(false);
  const cpfInputRef = useRef<TextInputMasked>(null);
  const celInputRef = useRef<TextInputMasked>(null);
  const [stateId, setStateId] = useState(null);

  const { states } = useGetStates();
  const { cities } = useGetCities(stateId);

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
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const body = {
        ...values,
        cellphone: celInputRef.current?.getRawValue(),
        cpf: cpfInputRef.current?.getRawValue(),
      };

      const { data } = await api.post<{ result: { userId: number } }>(
        '/clients',
        body
      );

      toast.show({
        title: 'Cadastrado com sucesso!',
        description: 'Parabéns! agora só falta você ativar a sua conta!',
        status: 'success',
      });
      navigation.navigate('ActiveClient', {
        userId: data.result.userId,
        cellphone: body.cellphone,
      });
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Parace que houve um erro!',
        description: message || '',
        status: 'error',
      });
    } finally {
      setSubmitting(false);
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
            submitForm,
            handleChange,
            setFieldValue,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Flex align="center" w="90%">
              <FormControl
                isRequired
                isInvalid={!!(errors?.name && touched?.name)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Nome
                </FormControl.Label>
                <Input
                  value={values.name}
                  placeholder="Nome"
                  onChangeText={handleChange('name')}
                />
                <ErrorMessage
                  name="name"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.cpf && touched?.cpf)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  CPF
                </FormControl.Label>
                <FieldMask
                  type="cpf"
                  value={values.cpf}
                  placeholder="CPF"
                  onChangeText={handleChange('cpf')}
                  maskRef={cpfInputRef}
                />
                <ErrorMessage
                  name="cpf"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.email && touched?.email)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Email
                </FormControl.Label>

                <Input
                  value={values.email}
                  placeholder="email"
                  onChangeText={handleChange('email')}
                />
                <ErrorMessage
                  name="email"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.cellphone && touched?.cellphone)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Celular
                </FormControl.Label>

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
                  maskRef={celInputRef}
                />
                <ErrorMessage
                  name="cellphone"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.state && touched?.state)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Estado
                </FormControl.Label>

                <Select
                  selectedValue={values.state}
                  onValueChange={value => {
                    setFieldValue('state', value);
                    setStateId(value);
                  }}
                >
                  {states.map(item => (
                    <Select.Item
                      key={item.id}
                      label={item.name}
                      value={item.id.toString()}
                    />
                  ))}
                </Select>

                <ErrorMessage
                  name="state"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.city && touched?.city)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Cidade
                </FormControl.Label>

                <Select
                  selectedValue={values.city}
                  onValueChange={handleChange('city')}
                >
                  {cities.map(item => (
                    <Select.Item
                      key={item.id}
                      label={item.name}
                      value={item.id.toString()}
                    />
                  ))}
                </Select>

                <ErrorMessage
                  name="city"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.password && touched?.password)}
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Senha
                </FormControl.Label>
                <FieldSecure
                  value={values.password}
                  placeholder="Senha"
                  onChangeText={handleChange('password')}
                />
                <ErrorMessage
                  name="password"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <FormControl
                mt="10px"
                isRequired
                isInvalid={
                  !!(errors?.confirmPassword && touched?.confirmPassword)
                }
              >
                <FormControl.Label _text={{ color: '#fff' }}>
                  Confimar senha
                </FormControl.Label>
                <FieldSecure
                  value={values.confirmPassword}
                  placeholder="Confimar senha"
                  onChangeText={handleChange('confirmPassword')}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={FormControl.ErrorMessage}
                  _text={{ color: '#fff' }}
                />
              </FormControl>

              <Checkbox mt="10px" isChecked={checked} onChange={setChecked}>
                Termos de uso
              </Checkbox>

              <Button
                w="100%"
                my="20px"
                disabled={!checked}
                isLoading={isSubmitting}
                onPress={submitForm}
              >
                Cadastrar
              </Button>
            </Flex>
          )}
        </Formik>
      </Layout>
    </ScrollView>
  );
};

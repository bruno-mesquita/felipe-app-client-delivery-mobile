import { useState, useRef } from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { TextInputMasked } from 'react-native-masked-text';
import { useToast, Button, Flex, FormControl, Input, Text } from 'native-base';

import { FieldMask } from '@form';
import { ScreenNotAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

import { Layout } from '../_Layout';

import type { Values } from './props';
import schema from './schema';

export const ActiveClient = ({
  navigation,
  route,
}: ScreenNotAuthProps<'ActiveClient'>) => {
  const { width } = useWindowDimensions();
  const toast = useToast();

  const [newPhone, setNewPhone] = useState('');
  const [isNewPhone, setIsNewPhone] = useState(false);
  const inputRef = useRef<TextInputMasked>(null);

  const initialValues: Values = {
    code: '',
    userId: route.params.userId,
  };

  const resendCode = async () => {
    try {
      const newCellphone = inputRef.current?.getRawValue();

      const body = {
        newCellphone: newCellphone !== '' ? newCellphone : null,
        cellphone: route.params.cellphone,
      };

      await api.put('/auth/resend-code', body);

      toast.show({
        title: 'Código reenviado com sucesso!',
        status: 'info',
      });
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Houve um erro!',
        description: message,
        status: 'error',
      });
    }
  };

  const onSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    try {
      await api.put('/clients/activate', values);
      toast.show({
        title: 'Usuário ativado!',
        status: 'success',
      });
      navigation.navigate('Login');
    } catch (err) {
      const { message } = err.response.data;
      resetForm();
      toast.show({
        title: 'Houve um erro!',
        description: message,
        status: 'error',
      });
    }
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ values, handleSubmit, handleChange, isSubmitting }) => (
          <Flex align="center" w="100%">
            {!isNewPhone && (
              <FormControl w="90%">
                <FormControl.Label _text={{ color: '#fff' }}>
                  Código
                </FormControl.Label>
                <Input
                  value={values.code}
                  placeholder="Código"
                  onChangeText={handleChange('code')}
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="code"
                />
              </FormControl>
            )}

            {isNewPhone && (
              <FormControl w="90%" mt="10px">
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
                  value={newPhone}
                  placeholder="Celular"
                  onChangeText={value => setNewPhone(value)}
                  maskRef={inputRef}
                />
              </FormControl>
            )}

            {!isNewPhone && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: width * 0.9,
                  marginTop: 20,
                }}
              >
                <TouchableOpacity onPress={() => setIsNewPhone(true)}>
                  <Text color="#fff">trocar telefone</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={resendCode}>
                  <Text color="#fff">Reenviar código</Text>
                </TouchableOpacity>
              </View>
            )}

            <Button
              mt="30px"
              w="70%"
              onPress={() => {
                if (isNewPhone) setIsNewPhone(false);
                else handleSubmit();
              }}
            >
              {isNewPhone ? 'Trocar' : 'Ativar'}
            </Button>
            {isNewPhone && (
              <Button
                w="70%"
                mt="10px"
                onPress={() => {
                  setIsNewPhone(false);
                  setNewPhone('');
                }}
              >
                Cancelar
              </Button>
            )}
          </Flex>
        )}
      </Formik>
    </Layout>
  );
};

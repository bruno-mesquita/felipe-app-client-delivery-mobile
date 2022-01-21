import { useRef } from 'react';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { useToast, Flex, Button, FormControl } from 'native-base';
import { TextInputMasked } from 'react-native-masked-text';

import { FieldMask } from '@form';
import { ScreenNotAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

import { Layout } from '../_Layout';
import { Values } from './props';

export const ForgotPassword = ({
  navigation,
}: ScreenNotAuthProps<'ForgotPassword'>) => {
  const toast = useToast();

  const inputRef = useRef<TextInputMasked>(null);

  const initialValues: Values = {
    cellphone: '',
  };

  const onSubmit = async (
    _: Values,
    { resetForm, setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const cellphone = inputRef.current?.getRawValue();

      if (cellphone.length > 0) {
        const body = { cellphone };

        await api.put('/auth/forgot-password', body);

        toast.show({
          title: 'Solicitação concluida!',
          description:
            'Enviamos um código para o seu celular para verificar se é vocẽ mesmo',
          status: 'info',
        });
        navigation.navigate('CodeToPassword', body);
      }
    } catch (err) {
      const { message } = err.response.data;

      resetForm();
      toast.show({
        title: 'Houve um erro',
        description: message,
        status: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, submitForm, isSubmitting }) => (
          <Flex align="center">
            <FormControl w="90%">
              <FormControl.Label _text={{ color: '#fff' }}>
                Telefone
              </FormControl.Label>
              <FieldMask
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={values.cellphone}
                placeholder="Telefone"
                onChangeText={handleChange('cellphone')}
                maskRef={inputRef}
              />
              <ErrorMessage
                component={FormControl.ErrorMessage}
                name="cellphone"
              />
            </FormControl>

            <Button
              mt="40px"
              isLoadingText="Enviando..."
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              onPress={submitForm}
            >
              Enviar código
            </Button>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
};

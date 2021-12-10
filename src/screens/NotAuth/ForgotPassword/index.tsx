import { useRef } from 'react';
import { Text } from 'react-native';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { useToast } from 'native-base';
import { TextInputMasked } from 'react-native-masked-text';

import { Button } from '@components';
import { FieldMask } from '@form';
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
import api from '@services/api';

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
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <ContentForm>
              <ContainerInput>
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
                  label="Telefone"
                  maskRef={inputRef}
                />
                <ErrorMessage component={Text} name="cellphone" />
              </ContainerInput>

              <ContainerButton>
                <Button onPress={() => handleSubmit()}>Enviar código</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

import { Text, TouchableOpacity } from 'react-native';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { useToast } from 'native-base';

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
import api from '@services/api';

export const CodeToPassword = ({
  navigation,
  route,
}: ScreenNotAuthProps<'CodeToPassword'>) => {
  const toast = useToast();

  const initialValues: Values = {
    code: '',
    cellphone: route.params.cellphone,
    newPassword: '',
    confirmPassword: '',
  };

  const resendCode = async () => {
    try {
      const body = {
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
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      await api.put('/auth/reset-password', values);

      toast.show({
        title: 'Senha atualizada!',
        status: 'success',
      });
      navigation.navigate('Login');
    } catch (err) {
      const { message } = err.response.data;

      toast.show({
        title: 'Houve um erro!',
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
                <Field
                  value={values.code}
                  placeholder="Código"
                  onChangeText={handleChange('code')}
                  label="Código"
                />
                <ErrorMessage component={Text} name="code" />
              </ContainerInput>

              <ContainerInput>
                <Field
                  value={values.newPassword}
                  placeholder="Nova senha"
                  onChangeText={handleChange('newPassword')}
                  label="Nova senha"
                  secureTextEntry
                />
                <ErrorMessage component={Text} name="newPassword" />
              </ContainerInput>

              <ContainerInput>
                <Field
                  value={values.confirmPassword}
                  placeholder="Confirmar senha"
                  onChangeText={handleChange('confirmPassword')}
                  label="Confirmar senha"
                  secureTextEntry
                />
                <ErrorMessage component={Text} name="confirmPassword" />
              </ContainerInput>
              <TouchableOpacity onPress={resendCode}>
                <Text style={{ color: '#fff', marginTop: 20 }}>
                  Reenviar código
                </Text>
              </TouchableOpacity>

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

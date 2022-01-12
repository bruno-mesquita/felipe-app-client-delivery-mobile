import { useState, useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import { TextInputMasked } from 'react-native-masked-text';
import { useToast } from 'native-base';

import { Button } from '@components';
import { Field, FieldMask } from '@form';
import { ScreenNotAuthProps } from '@utils/ScreenProps';
import api from '@services/api';

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
          {({ values, handleSubmit, handleChange }) => (
            <ContentForm>
              {!isNewPhone && (
                <ContainerInput>
                  <Field
                    value={values.code}
                    placeholder="Código"
                    onChangeText={handleChange('code')}
                    label="Código"
                  />
                  <ErrorMessage
                    component={Text}
                    style={{ color: '#fff' }}
                    name="code"
                  />
                </ContainerInput>
              )}

              {isNewPhone && (
                <ContainerInput>
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
                    label="Celular"
                    maskRef={inputRef}
                  />
                </ContainerInput>
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
                    <Text style={{ color: '#fff' }}>trocar telefone</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={resendCode}>
                    <Text style={{ color: '#fff' }}>Reenviar código</Text>
                  </TouchableOpacity>
                </View>
              )}

              <ContainerButton>
                <Button
                  onPress={() => {
                    if (isNewPhone) setIsNewPhone(false);
                    else handleSubmit();
                  }}
                >
                  {isNewPhone ? 'Trocar' : 'Ativar'}
                </Button>
                {isNewPhone && (
                  <Button
                    onPress={() => {
                      setIsNewPhone(false);
                      setNewPhone('');
                    }}
                  >
                    Cancelar
                  </Button>
                )}
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

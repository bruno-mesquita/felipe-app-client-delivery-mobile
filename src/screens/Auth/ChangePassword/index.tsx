import { View, Alert } from 'react-native';
import { Formik, ErrorMessage } from 'formik';

import { FieldSecure } from '@form';
import { Button } from '@components';
import api from '@services/api';

import { Container, ViewField, ViewForm, ViewFields } from './styles';

export const ChangePassword = () => {
  const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      if (values.newPassword === values.confirmNewPassword) {
        await api.put('/clients/update-password', values);

        Alert.alert('Aviso', 'Senha atualizada');
      } else {
        Alert.alert('Aviso', 'Senhas não são iguais');
      }
    } catch (err) {
      Alert.alert('Aviso', 'Erro ao atualizar a senha');
    }
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, handleChange, handleSubmit }) => (
          <ViewForm>
            <ViewFields>
              <ViewField>
                <FieldSecure
                  label="Senha atual"
                  labelColor="black"
                  value={values.currentPassword}
                  onChangeText={handleChange('currentPassword')}
                />
                <ErrorMessage component={View} name="currentPassword" />
              </ViewField>
              <ViewField>
                <FieldSecure
                  label="Nova senha"
                  labelColor="black"
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                />
                <ErrorMessage component={View} name="newPassword" />
              </ViewField>
              <ViewField>
                <FieldSecure
                  label="Confirmar senha"
                  labelColor="black"
                  value={values.confirmNewPassword}
                  onChangeText={handleChange('confirmNewPassword')}
                />
                <ErrorMessage component={View} name="confirmNewPassword" />
              </ViewField>
            </ViewFields>
            <View>
              <Button primaryColor onPress={() => handleSubmit()}>
                Atualizar
              </Button>
            </View>
          </ViewForm>
        )}
      </Formik>
    </Container>
  );
};

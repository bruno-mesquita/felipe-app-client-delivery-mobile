import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Formik, ErrorMessage } from 'formik';

import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';

import { changeUserPasswordRequest } from '../../../store/ducks/user/user.actions';

import { Container, ViewField, ViewForm, ViewFields } from './styles';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const initialValues = {
    currentPassoword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const onSubmit = (values: typeof initialValues) => {
    /* dispatch(changeUserPasswordRequest(values)); */
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
                <Field
                  textValue="Senha atual"
                  textColor="black"
                  value={values.currentPassoword}
                  secureTextEntry
                  onChangeText={handleChange('currentPassoword')}
                />
                <ErrorMessage component={View} name="currentPassoword" />
              </ViewField>
              <ViewField>
                <Field
                  textValue="Nova senha"
                  textColor="black"
                  value={values.newPassword}
                  secureTextEntry
                  onChangeText={handleChange('newPassword')}
                />
                <ErrorMessage component={View} name="newPassword" />
              </ViewField>
              <ViewField>
                <Field
                  textValue="Confirmar senha"
                  textColor="black"
                  value={values.confirmNewPassword}
                  secureTextEntry
                  onChangeText={handleChange('confirmNewPassword')}
                />
                <ErrorMessage component={View} name="confirmNewPassword" />
              </ViewField>
            </ViewFields>
            <View>
              <Button primaryColor onPress={handleSubmit}>
                Atualizar
              </Button>
            </View>
          </ViewForm>
        )}
      </Formik>
    </Container>
  );
};

export default ChangePassword;

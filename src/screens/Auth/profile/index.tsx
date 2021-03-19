import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { Formik, ErrorMessage } from 'formik';

import { Button } from '../../../components/Button';
import { Field } from '../../../components/Field';
import * as ImagePicker from 'expo-image-picker';

import { updateProfileRequest } from '../../../store/ducks/user/user.actions';

import {
  Container,
  ViewField,
  ViewForm,
  ViewFields,
  ViewUser,
  ButtonAvatar,
  UserAvatar,
  ViewUserData,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();

  const { name, email, phone, avatar, cpf } = useSelector(
    ({ user }) => user.profile,
  );

  const formattedPhone = (value: string) => {
    if (value.length === 11) {
      const part1 = value.substring(0, 2);
      const part2 = value.substring(2, 7);
      const part3 = value.substring(7, 11);

      return `(${part1}) ${part2}-${part3}`;
    }
  };

  const initialValues = {
    name,
    email,
    phone: formattedPhone(phone),
    avatar,
  };

  const onSubmit = (values: typeof initialValues) => {
    dispatch(updateProfileRequest(values));
  };

  const formattedCpf = (value: string) => {
    const part1 = value.substring(0, 3);
    const part2 = value.substring(3, 6);
    const part3 = value.substring(6, 9);
    const part4 = value.substring(9, 11);

    return `${part1}.${part2}.${part3}-${part4}`;
  };

  function toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'android') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert(
            'Precisamos da sua permissão para adicionar sua foto do perfil!',
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      avatar;
    }
  };

  // Teste da função que edita

  toDataURL('../../../assets/images/mocks/perfil.jpeg', function (dataUrl) {
    console.log('RESULT:', dataUrl);
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, handleChange, handleSubmit }) => (
          <ViewForm>
            <ViewUser>
              <View>
                <UserAvatar
                  source={require('../../../assets/images/mocks/perfil.jpeg')}
                />
                <ButtonAvatar title="Editar" onPress={() => pickImage()} />
              </View>
              <ViewUserData>
                <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontWeight: 'bold' }}>{formattedCpf(cpf)}</Text>
                <Text style={{ fontWeight: 'bold' }}>{email}</Text>
              </ViewUserData>
            </ViewUser>
            <ViewFields>
              <ViewField>
                <Field
                  textValue="Nome Completo"
                  textColor="black"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <ErrorMessage component={View} name="name" />
              </ViewField>
              <ViewField>
                <Field
                  textValue="Email"
                  textColor="black"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <ErrorMessage component={View} name="email" />
              </ViewField>
              <ViewField>
                <Field
                  textValue="Celular"
                  textColor="black"
                  value={values.phone}
                  keyboardType="number-pad"
                  onChangeText={e => {
                    if (e.length === 11) {
                      handleChange('phone')(formattedPhone(e));
                    } else {
                      handleChange('phone')(e);
                    }
                  }}
                />
                <ErrorMessage component={View} name="phone" />
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

export default Profile;

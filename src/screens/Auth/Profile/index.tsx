import { useEffect, useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenAuthProps } from '@utils/ScreenProps';
import api from '@services/api';
import { Field, FieldMask } from '@form';
import { Button } from '@components';

import { Container, ViewField, ViewForm, ViewFields, ViewUser, UserAvatar, ViewUserData } from './styles';

import { UserProfile } from './props';

export const Profile = ({ navigation }: ScreenAuthProps<'Profile'>) => {
  const [user, setUser] = useState<UserProfile>(null);
  const [loading, setLoading] = useState(false);

  const getUser = useCallback(async () => {
    try {
      const { data } = await api.post('/clients/me', {
        selects: ['name', 'email', 'cellphone', 'avatar', 'cpf'],
      });

      setUser(data.result);
    } catch (err) {
      Alert.alert('Erro', 'Houve um problema ao buscar seus dados', [
        {
          text: 'Sair',
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }, []);

  const initialValues = {
    name: user?.name,
    email: user?.email,
    cellphone: user?.cellphone,
  };

  const onSubmit = async (values: typeof initialValues) => {
    try {
      setLoading(true);
      await api.put('/clients', values);

      Alert.alert('Atualizado!', 'Perfil atualizado com sucesso');
    } catch (err) {
      Alert.alert('Erro', 'Houve um erro ao atualizar o perfil');
    } finally {
      setLoading(false);
    }
  };

  const formattedCpf = (value: string) => {
    const part1 = value.substring(0, 3);
    const part2 = value.substring(3, 6);
    const part3 = value.substring(6, 9);
    const part4 = value.substring(9, 11);

    return `${part1}.${part2}.${part3}-${part4}`;
  };

  const permissions = useCallback(async () => {
    const { status: cameraStaus } = await ImagePicker.requestCameraPermissionsAsync();
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted' || cameraStaus !== 'granted') {
      Alert.alert('Atenção!', 'Precisamos da sua permissão para adicionar sua foto do perfil!');
    }
  }, []);

  useEffect(() => {
    permissions();
    getUser();
  }, []);

  const pickImage = async () => {
    try {
      const result = (await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      })) as any;

      if (!result.cancelled) {
        const pathArray = result.uri.split('.') as string[];

        const ext = pathArray[pathArray.length - 1];

        const encoded = `data:image/${ext};base64,${result.base64}`;

        await api.post('/avatar', { encoded, name: `${user.name}-image` });

        setUser(old => ({ ...old, avatar: encoded }));
      }
    } catch (err) {
      Alert.alert('Erro', 'Erro ao atualizar imagem');
    }
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
        {({ values, handleChange, handleSubmit }) => (
          <ViewForm>
            <ViewUser>
              <TouchableOpacity onPress={pickImage}>
                {user?.avatar ? (
                  <UserAvatar source={{ uri: user?.avatar }} />
                ) : (
                  <MaterialIcons name="account-circle" size={100} color="#c4c4c4" />
                )}
              </TouchableOpacity>
              <ViewUserData>
                <Text style={{ fontWeight: 'bold' }}>{values.name}</Text>
                <Text style={{ fontWeight: 'bold' }}>{user?.cpf ? formattedCpf(user?.cpf) : null}</Text>
                <Text style={{ fontWeight: 'bold' }}>{values.email}</Text>
              </ViewUserData>
            </ViewUser>
            <ViewFields>
              <ViewField>
                <Field
                  labelColor="#000"
                  label="Nome Completo"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <ErrorMessage component={View} name="name" />
              </ViewField>
              <ViewField>
                <Field labelColor="#000" label="Email" value={values.email} onChangeText={handleChange('email')} />
                <ErrorMessage component={View} name="email" />
              </ViewField>
              <ViewField>
                <FieldMask
                  labelColor="#000"
                  type="cel-phone"
                  options={{ withDDD: true }}
                  label="Celular"
                  value={values.cellphone}
                  onChangeText={handleChange('phone')}
                />
                <ErrorMessage component={View} name="phone" />
              </ViewField>
            </ViewFields>
            <View>
              <Button loading={loading} primaryColor onPress={() => handleSubmit()}>
                Atualizar
              </Button>
            </View>
          </ViewForm>
        )}
      </Formik>
    </Container>
  );
};

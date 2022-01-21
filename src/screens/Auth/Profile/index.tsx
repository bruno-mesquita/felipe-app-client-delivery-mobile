import { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Button,
  Input,
  FormControl,
  useToast,
  Flex,
  Avatar,
} from 'native-base';

import { ScreenAuthProps } from '@utils/ScreenProps';
import api from '@services/api';
import { FieldMask } from '@form';

import { UserProfile } from './props';

export const Profile = ({ navigation }: ScreenAuthProps<'Profile'>) => {
  const toast = useToast();

  const [user, setUser] = useState<UserProfile>(null);

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
    name: user?.name || '',
    email: user?.email || '',
    cellphone: user?.cellphone || '',
  };

  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      await api.put('/clients', values);

      toast.show({
        title: 'Atualizado!',
        description: 'Perfil atualizado com sucesso',
        status: 'success',
      });
    } catch (err) {
      toast.show({
        title: 'Erro',
        description: 'Houve um erro ao atualizar o perfil',
        status: 'error',
      });
    } finally {
      setSubmitting(false);
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
    const { status: cameraStaus } =
      await ImagePicker.requestCameraPermissionsAsync();
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted' || cameraStaus !== 'granted') {
      Alert.alert(
        'Atenção!',
        'Precisamos da sua permissão para adicionar sua foto do perfil!'
      );
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
    <Flex flex={1} px="20px" justify="space-around">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <>
            <TouchableOpacity onPress={pickImage}>
              {user?.avatar ? (
                <Avatar
                  alignSelf="center"
                  size="125px"
                  rounded="50px"
                  source={{ uri: user?.avatar }}
                />
              ) : (
                <MaterialIcons
                  style={{ alignSelf: 'center' }}
                  name="account-circle"
                  size={125}
                  color="#c4c4c4"
                />
              )}
            </TouchableOpacity>
            <Flex w="100%" align="center">
              <FormControl>
                <FormControl.Label>Nome Completo</FormControl.Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="name"
                />
              </FormControl>

              <FormControl mt="10px">
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="email"
                />
              </FormControl>

              <FormControl mt="10px">
                <FormControl.Label>Celular</FormControl.Label>
                <FieldMask
                  type="cel-phone"
                  options={{ withDDD: true }}
                  value={values.cellphone}
                  onChangeText={handleChange('phone')}
                />
                <ErrorMessage
                  component={FormControl.ErrorMessage}
                  name="cellphone"
                />
              </FormControl>
            </Flex>
            <Button
              w="70%"
              alignSelf="center"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              variant="inverted"
              onPress={() => handleSubmit()}
            >
              Atualizar
            </Button>
          </>
        )}
      </Formik>
    </Flex>
  );
};

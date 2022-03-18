import { TouchableOpacity } from 'react-native';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Input, FormControl, useToast, Flex } from 'native-base';

import { FastImage } from '@components';
import api from '@services/api';
import { FieldMask } from '@form';
import { useUser, IUser } from '@hooks';

type IValues = Pick<IUser, 'name' | 'email' | 'cellphone'>;

export const Profile = () => {
  const toast = useToast();
  const { data: user, mutate } = useUser();

  const initialValues: IValues = {
    name: user.name,
    email: user.email,
    cellphone: user.cellphone,
  };

  const onSubmit = async (
    values: IValues,
    { setSubmitting }: FormikHelpers<IValues>
  ) => {
    try {
      await api.put('/clients', values);

      toast.show({
        w: '90%',
        title: 'Atualizado!',
        description: 'Perfil atualizado com sucesso',
        status: 'success',
      });
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Erro',
        description: 'Houve um erro ao atualizar o perfil',
        status: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const pickImage = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
      });

      if (!result.cancelled) {
        const pathArray = result.uri.split('.') as string[];

        const ext = pathArray[pathArray.length - 1];

        const encoded = `data:image/${ext};base64,${result.base64}`;

        await api.post('/avatar', { encoded, name: `${user.name}-image` });

        mutate(old => ({ ...old, avatar: encoded }));
      }
    } catch (err) {
      toast.show({
        w: '90%',
        title: 'Erro',
        description: 'Erro ao atualizar imagem',
      });
    }
  };

  return (
    <Flex flex={1} px="20px" justify="space-around">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <>
            <TouchableOpacity onPress={pickImage}>
              {user.avatar ? (
                <FastImage
                  source={{ uri: user.avatar }}
                  cacheKey={user.id.toString()}
                  alignSelf="center"
                  size="125px"
                  rounded="100px"
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
              <FormControl
                isRequired
                isInvalid={!!(errors?.name && touched?.name)}
              >
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

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.email && touched?.email)}
              >
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

              <FormControl
                mt="10px"
                isRequired
                isInvalid={!!(errors?.cellphone && touched?.cellphone)}
              >
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

import { useState, useEffect } from 'react';
import { Alert, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useToast, Checkbox, Text, Flex } from 'native-base';

import api from '@services/api';
import { NavigationAuthHook } from '@utils/ScreenProps';

import { useGetAdresses, IAddress } from '@hooks';

export const Card = ({ ...props }: IAddress) => {
  const navigation = useNavigation<NavigationAuthHook<'Adresses'>>();
  const toast = useToast();
  const { mutate } = useGetAdresses();
  const { width } = useWindowDimensions();

  const [fieldDefault, setFieldDefault] = useState(false);

  useEffect(() => {
    const fieldDefault = 'Não informado';

    if (
      props.street === fieldDefault &&
      props.neighborhood === fieldDefault &&
      props.number === (fieldDefault as any)
    ) {
      setFieldDefault(true);
    }
  }, []);

  const toGoEdit = () => navigation.navigate('UpdateAddress', { id: props.id });

  const onChange = async () => {
    try {
      await api.put(`/adresses-client/${props.id}`, {
        active: !props.active,
      });

      mutate(old => {
        const index = old.findIndex(e => e.id === props.id);

        const copy = [...old];

        copy[index].active = !copy[index].active;

        return copy;
      });
      toast.show({
        status: 'success',
        title: 'Endereço padrão atualizado com sucesso',
      });
    } catch (err) {
      toast.show({
        title: 'Houve um erro!',
        description:
          'Houve um erro ao atualizar o endereço como padrão. Você não pode ficar sem endereço ativo',
        status: 'error',
      });
    }
  };

  const deleteAddress = () => {
    api.delete(`/adresses-client/${props.id}`).then(() => {
      mutate(old => old.filter(e => e.id !== props.id));
    });
  };

  const onLongPress = () => {
    Alert.alert('Deletar endereço', 'Você deseja deletar esse endereço?', [
      {
        onPress: deleteAddress,
        text: 'Sim',
      },
      {
        text: 'Não',
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={toGoEdit} onLongPress={onLongPress}>
      <Flex
        my="10px"
        bg="#fff"
        shadow="6"
        rounded="10px"
        w={width * 0.8}
        justify="space-around"
        py="10px"
        px="20px"
      >
        <Flex direction="row">
          <Checkbox
            accessibilityLabel="Ativar ou desativar endereço"
            isChecked={props.active}
            onChange={() => onChange()}
          />
          <Text fontWeight={600} ml="10px">
            {props.nickname}
          </Text>
        </Flex>
        {fieldDefault ? (
          <Text my="5px">Endereço não informado</Text>
        ) : (
          <Text my="5px">{`${props.street}, ${props.number} - ${props.neighborhood}`}</Text>
        )}
        <Text my="5px">{`${props.city.name} - ${props.city.state.name}`}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Flex, Text, Divider } from 'native-base';

import { FastImage } from '../FastImage';
import { useAppDispatch } from '@store/hooks';
import { useUser } from '@hooks';
import { authActions } from '@store/reducers/auth';

export const Drawer = ({ navigation }: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();

  const { user } = useUser();

  const logout = () => dispatch(authActions.logout());

  const goProfile = () => navigation.navigate('Profile');

  const goConfiguration = () => navigation.navigate('Configuration');

  const goAdresses = () => navigation.navigate('Adresses');

  const goOrders = () => navigation.navigate('Orders');

  const goCategories = () => navigation.navigate('Categories');

  return (
    <Flex safeAreaTop bg="#9E0404" flex={1} px="20px">
      {user.avatar ? (
        <FastImage
          alignSelf="center"
          my="20px"
          cacheKey={user.id.toString()}
          size="125px"
          rounded="100px"
          source={{ uri: user.avatar }}
        />
      ) : (
        <MaterialIcons
          name="account-circle"
          size={125}
          color="#c4c4c4"
          style={{ alignSelf: 'center', marginVertical: 20 }}
        />
      )}
      <Pressable my="5px" onPress={goProfile}>
        <Text color="#fff" fontSize="17px">
          Perfil
        </Text>
        <Divider my="8px" />
      </Pressable>
      <Pressable my="5px" onPress={goCategories}>
        <Text color="#fff" fontSize="17px">
          Categorias
        </Text>
        <Divider my="8px" />
      </Pressable>
      <Pressable my="5px" onPress={goOrders}>
        <Text color="#fff" fontSize="17px">
          Pedidos
        </Text>
        <Divider my="8px" />
      </Pressable>
      <Pressable my="5px" onPress={goAdresses}>
        <Text color="#fff" fontSize="17px">
          Endereços
        </Text>
        <Divider my="8px" />
      </Pressable>
      <Pressable my="5px" onPress={goConfiguration}>
        <Text color="#fff" fontSize="17px">
          Configurações
        </Text>
        <Divider my="8px" />
      </Pressable>
      <Pressable my="5px" onPress={logout}>
        <Text color="#fff" fontSize="17px">
          Sair
        </Text>
      </Pressable>
    </Flex>
  );
};

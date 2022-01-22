import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { useAppDispatch } from '@store/hooks';
import { useUser } from '@hooks';
import { authActions } from '@store/reducers/auth';

import {
  Container,
  List,
  ListItem,
  ListItemText,
  User,
  UserAvatar,
  Divider,
} from './styles';

export const Drawer = ({
  navigation,
  ...props
}: DrawerContentComponentProps) => {
  const dispatch = useAppDispatch();

  const { user } = useUser();

  const logout = () => dispatch(authActions.logout());

  const goProfile = () => navigation.navigate('Profile');

  const goConfiguration = () => navigation.navigate('Configuration');

  const goAdresses = () => navigation.navigate('Adresses');

  const goOrders = () => navigation.navigate('Orders');

  const goCategories = () => navigation.navigate('Categories');

  return (
    <Container {...props}>
      <User>
        {user.avatar ? (
          <UserAvatar source={{ uri: user.avatar }} />
        ) : (
          <MaterialIcons name="account-circle" size={125} color="#c4c4c4" />
        )}
      </User>
      <List>
        <ListItem onPress={goProfile}>
          <ListItemText>Perfil</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goCategories}>
          <ListItemText>Categorias</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goOrders}>
          <ListItemText>Pedidos</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goAdresses}>
          <ListItemText>Endereços</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goConfiguration}>
          <ListItemText>Configurações</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={logout}>
          <ListItemText>Sair</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
};

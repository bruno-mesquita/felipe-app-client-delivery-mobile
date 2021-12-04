import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { DrawerContentComponentProps, useDrawerStatus } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, List, ListItem, ListItemText, User, UserAvatar, Divider } from './styles';

import api from '@services/api';
import { logoutAction } from '@store/ducks/auth/auth.actions';

export const Drawer = ({ navigation, ...props }: DrawerContentComponentProps) => {
  const drawerStatus = useDrawerStatus();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(null);

  const getUser = useCallback(async () => {
    try {
      const { data } = await api.post('/clients/me', { selects: ['avatar'] });

      setAvatar(data.result.avatar);
    } catch (err) {
      setAvatar(null);
    }
  }, []);

  useEffect(() => {
    if (drawerStatus === 'open') getUser();
  }, [drawerStatus, getUser]);

  const logout = () => dispatch(logoutAction());

  const goProfile = () => navigation.navigate('Profile');

  const goConfiguration = () => navigation.navigate('Configuration');

  const goAdresses = () => navigation.navigate('Adresses');

  const goOrders = () => navigation.navigate('Orders');

  const goCategories = () => navigation.navigate('Categories');

  return (
    <Container {...props}>
      <User>
        {avatar ? (
          <UserAvatar source={{ uri: avatar }} />
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

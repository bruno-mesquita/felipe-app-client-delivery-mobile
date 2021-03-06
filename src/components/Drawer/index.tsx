import React from 'react';
import { useDispatch } from 'react-redux';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import {
  Container,
  List,
  ListItem,
  ListItemText,
  User,
  UserAvatar,
  Divider,
} from './styles';

import { logout } from '../../store/ducks/auth/auth.actions';

const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const dispatch = useDispatch();

  const goLogout = () => {
    dispatch(logout());
  };

  const goProfile = () => {
    props.navigation.navigate('Profile');
  };

  const goChangePassword = () => {
    props.navigation.navigate('ChangePassword');
  };

  return (
    <Container {...props}>
      <User>
        <UserAvatar source={require('../../assets/images/mocks/perfil.jpeg')} />
      </User>
      <List>
        <ListItem onPress={() => goProfile()}>
          <ListItemText>Perfil</ListItemText>
          <Divider />
        </ListItem>
        <ListItem>
          <ListItemText>Pedidos</ListItemText>
          <Divider />
        </ListItem>
        <ListItem>
          <ListItemText>Endereços</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goChangePassword}>
          <ListItemText>Alterar senha</ListItemText>
          <Divider />
        </ListItem>
        <ListItem onPress={goLogout}>
          <ListItemText>Sair</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
};

export default Drawer;

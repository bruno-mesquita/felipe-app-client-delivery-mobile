import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  Username,
} from './styles';

import { logout } from '../../store/ducks/auth/auth.actions';

const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  const dispatch = useDispatch();

  const user = useSelector(({ user }) => user);

  const goLogout = () => {
    dispatch(logout());
  };

  const goProfile = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <Container {...props}>
      <User>
        <Username>{user.profile.name}</Username>
        {/* <UserAvatar/> */}
      </User>
      <List>
        <ListItem onPress={() => goProfile()}>
          <ListItemText>Perfil</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Configurações</ListItemText>
        </ListItem>
        <ListItem onPress={goLogout}>
          <ListItemText>Sair</ListItemText>
        </ListItem>
      </List>
    </Container>
  );
};

export default Drawer;

import React, { useCallback, useEffect, useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

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
import { getApi } from '@services/api';

export const Drawer = memo(
  (props: DrawerContentComponentProps<DrawerContentOptions>) => {
    const dispatch = useDispatch();

    const [avatar, setAvatar] = useState(null);

    const getAvatar = useCallback(async () => {
      try {
        const api = getApi();

        const { data } = await api.post('/clients/me', {
          selects: ['avatar'],
        });

        setAvatar(data.result.avatar);
      } catch (err) {
        setAvatar(null);
      }
    }, []);

    useEffect(() => {
      getAvatar();
    }, [getAvatar]);

    const goLogout = () => {
      dispatch(logout());
    };

    const goProfile = () => {
      props.navigation.navigate('Profile');
    };

    const goConfiguration = () => {
      props.navigation.navigate('Configuration');
    };

    const goAdresses = () => {
      props.navigation.navigate('Address');
    };

    const goOrders = () => {
      props.navigation.navigate('Orders');
    };

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
          <ListItem onPress={goLogout}>
            <ListItemText>Sair</ListItemText>
          </ListItem>
        </List>
      </Container>
    );
  },
);

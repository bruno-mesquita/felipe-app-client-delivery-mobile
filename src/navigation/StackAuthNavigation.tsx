import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ScreenAuthList } from '@utils/ScreenProps';

import {
  Home,
  Profile,
  Categories,
  ChangePassword,
  Adresses,
  AddAddress,
  Establishment,
  Cart,
  TrackOrder,
  Orders,
  UpdateAddress,
  Configuration,
  AboutApp,
  TermsUse,
  Deliveryman,
  Account,
} from '../screens/Auth';

const { Navigator, Screen } = createNativeStackNavigator<ScreenAuthList>();

const Header = () => (
  <Image
    style={{ width: 90, height: 43 }}
    source={require('../assets/images/logo.png')}
  />
);

const Menu = ({ openDrawer }) => (
  <MaterialIcons
    name="menu"
    size={25}
    color="#fff"
    style={{ paddingLeft: 10 }}
    onPress={openDrawer}
  />
);

export const StackAuthNavigation = ({ navigation }) => (
  <Navigator
    initialRouteName="Categories"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#9E0404',
      },
      headerTitleAlign: 'center',
      headerTintColor: '#ffffff',
    }}
  >
    <Screen
      name="Categories"
      component={Categories}
      options={{
        headerTitle: () => <Header />,
        headerLeft: () => <Menu openDrawer={navigation.openDrawer} />,
      }}
    />

    <Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header />,
        headerLeft: () => <Menu openDrawer={navigation.openDrawer} />,
      }}
    />
    <Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
    <Screen
      name="ChangePassword"
      component={ChangePassword}
      options={{ title: 'Alterar senha' }}
    />
    <Screen
      name="Adresses"
      component={Adresses}
      options={{ title: 'Endereços' }}
    />
    <Screen
      name="AddAddress"
      component={AddAddress}
      options={{ title: 'Adicionar endereço' }}
    />
    <Screen
      name="UpdateAddress"
      component={UpdateAddress}
      options={{ title: 'Atualizar endereço' }}
    />

    <Screen
      name="Establishment"
      component={Establishment}
      options={{ headerTitle: () => <Header /> }}
    />

    <Screen name="Cart" component={Cart} options={{ title: 'Carrinho' }} />

    <Screen
      name="Deliverymans"
      component={Deliveryman}
      options={{ title: 'Motoboys' }}
    />

    <Screen
      name="TrackOrder"
      component={TrackOrder}
      options={{ title: 'Acompanhar pedido' }}
    />
    <Screen name="Orders" component={Orders} options={{ title: 'Pedidos' }} />
    <Screen
      name="Configuration"
      component={Configuration}
      options={{ title: 'Configurações' }}
    />
    <Screen
      name="TermsUse"
      component={TermsUse}
      options={{ title: 'Termos de uso' }}
    />
    <Screen
      name="AboutApp"
      component={AboutApp}
      options={{ headerShown: false }}
    />
    <Screen
      name="Account"
      component={Account}
      options={{ title: 'Minha conta' }}
    />
  </Navigator>
);

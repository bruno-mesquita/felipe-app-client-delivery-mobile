import 'react-native-gesture-handler';

import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { NativeBaseProvider } from 'native-base';

import './config/reactotron';

import { AuthProvider } from './contexts/AuthContext';
import { Store } from './store';
import { Styled } from './styles/styled';
import Navigation from './navigation';
import { StatusBar } from './components';

const App = () => (
  <AuthProvider>
    <NativeBaseProvider>
      <Store>
        <Styled>
          <StatusBar />
          <Navigation />
        </Styled>
      </Store>
    </NativeBaseProvider>
  </AuthProvider>
);

registerRootComponent(App);

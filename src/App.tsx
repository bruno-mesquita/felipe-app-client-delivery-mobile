import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';

import './utils/yup-defaults';

import StoreProvider from './store/Provider';
import { Styled } from './styles/styled';
import theme from './styles/native-base.theme';
import Navigation from './navigation';
import { StatusBar, Notifications, ApiConfig } from './components';

const App = () => (
  <NativeBaseProvider theme={theme}>
    <StoreProvider>
      <ApiConfig>
        <Notifications />
        <Styled>
          <StatusBar />
          <Navigation />
        </Styled>
      </ApiConfig>
    </StoreProvider>
  </NativeBaseProvider>
);

export default App;

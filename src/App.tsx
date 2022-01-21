import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './utils/yup-defaults';

import StoreProvider from './store/Provider';
import { Styled } from './styles/styled';
import theme from './styles/native-base.theme';
import Navigation from './navigation';
import { StatusBar, Notifications, ApiConfig, AppLoading } from './components';

const App = () => (
  <AppLoading>
    <NativeBaseProvider theme={theme}>
      <StoreProvider>
        <ApiConfig>
          <SafeAreaProvider>
            <Notifications />
            <Styled>
              <StatusBar />
              <Navigation />
            </Styled>
          </SafeAreaProvider>
        </ApiConfig>
      </StoreProvider>
    </NativeBaseProvider>
  </AppLoading>
);

export default App;

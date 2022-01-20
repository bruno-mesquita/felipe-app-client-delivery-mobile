import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Notifications />
            <Styled>
              <StatusBar />
              <Navigation />
            </Styled>
          </SafeAreaView>
        </SafeAreaProvider>
      </ApiConfig>
    </StoreProvider>
  </NativeBaseProvider>
);

export default App;

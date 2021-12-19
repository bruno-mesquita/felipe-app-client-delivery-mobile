import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';

import './config/reactotron';

import { Store } from './store';
import { Styled } from './styles/styled';
import Navigation from './navigation';
import { StatusBar } from './components';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NativeBaseProvider>
      <Store>
        <Styled>
          <StatusBar />
          <Navigation />
        </Styled>
      </Store>
    </NativeBaseProvider>
  </GestureHandlerRootView>
);

export default App;

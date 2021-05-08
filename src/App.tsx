import 'react-native-gesture-handler';

import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Root } from 'native-base';

import './config/reactotron';

import Store from './store';
import Styled from './styles/styled';
import Navigation from './navigation';
import { StatusBar, AppLoading } from './components';

const App = () => (
  <AppLoading>
    <Root>
      <Store>
        <Styled>
          <StatusBar />
          <Navigation />
        </Styled>
      </Store>
    </Root>
  </AppLoading>
);

registerRootComponent(App);

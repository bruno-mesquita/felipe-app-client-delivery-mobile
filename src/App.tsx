import 'react-native-gesture-handler';

import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { StatusBar } from 'expo-status-bar';

import './config/reactotron';

import Store from './store';
import Styled from './styles/styled';
import Navigation from './navigation';

const App = () => (
  <Store>
    <Styled>
      <StatusBar style="light" backgroundColor="#b90000" />
      <Navigation />
    </Styled>
  </Store>
);

registerRootComponent(App);

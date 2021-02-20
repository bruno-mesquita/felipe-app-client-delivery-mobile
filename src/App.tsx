import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './navigation/drawer.routes';
import StackNotAuth from './navigation/stack-not-auth.routes';
import Store from './store';
import Styled from './styles/styled';
/* import useReduxAuth from './store/hooks/use-redux-auth'; */
import './config/reactotron';

export default function App() {
  /* const { logged } = useReduxAuth(); */
  return (
    <Styled>
      {/* {logged ? <Routes /> : <StackNotAuth />} */}
      <StackNotAuth />
      <StatusBar style="light" backgroundColor="#b90000" />
    </Styled>
  );
}

registerRootComponent(App);

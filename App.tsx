import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';

import Routes from './src/navigation/drawer.routes';
import StackNotAuth from './src/navigation/stack-not-auth.routes';
import Store from './src/store';

export default function App() {
  const { logged } = useSelector(({ auth }: any) => auth);

  return (
    <Store>
      {logged ? <Routes /> : <StackNotAuth />}
      <StatusBar style="light" backgroundColor="#b90000" />
    </Store>
  );
}

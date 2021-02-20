import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from './src/navigation/drawer.routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" backgroundColor="#b90000" />
    </>
  );
}

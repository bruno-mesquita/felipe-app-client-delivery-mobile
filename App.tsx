import { StatusBar } from 'expo-status-bar';
import React from 'react';
// TESTE!
import Login from './src/screens/login';

export default function App(): JSX.Element {
  return (
    <>
      {/* TESTE! */}
      <Login />
      <StatusBar style="light" backgroundColor="#b90000" />
    </>
  );
}

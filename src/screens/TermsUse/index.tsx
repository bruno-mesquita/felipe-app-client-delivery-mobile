import React from 'react';
import { WebView } from 'react-native-webview';

import { StatusBar } from '@components';

export const TermsUse = () => (
  <>
    <StatusBar translucent={false} />
    <WebView source={{ uri: 'https://www.termos.flippdelivery.com.br' }} />
  </>
);

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from 'styled-components/native';

const MyStatusBar = () => {
  const { colors } = useTheme();

  return <StatusBar style="light" backgroundColor={colors.primary} />;
};

export default MyStatusBar;

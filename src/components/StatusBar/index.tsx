import { StatusBar as ExpoStatusBar, StatusBarProps } from 'expo-status-bar';

import { useTheme } from 'styled-components/native';

export const StatusBar = (props: StatusBarProps) => {
  const { colors } = useTheme();

  return (
    <ExpoStatusBar {...props} style="light" backgroundColor={colors.primary} />
  );
};

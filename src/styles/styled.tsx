import { FC } from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from './theme';

export const Styled: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>



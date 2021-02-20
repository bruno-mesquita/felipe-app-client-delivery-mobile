import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { Props } from '../utils/props';

const Styled = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Styled;

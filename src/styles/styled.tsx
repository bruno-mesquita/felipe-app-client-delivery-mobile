import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { Props } from '../utils/props';

export const Styled = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>



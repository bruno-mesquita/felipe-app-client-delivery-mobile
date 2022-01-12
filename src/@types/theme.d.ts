import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components/native' {
  interface DefaultTheme {
    font: string;
    colors: {
      primary: string;
      secundary: string;
      third: string;
    };
    metrics: {
      px: (valuePx: number) => number;
    };
  }
}

export {};

import { Text, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { StyledButtonProps } from './props';

export const Container = styled(TouchableOpacity as StyledButtonProps)`
  ${({ theme, primaryColor }) => css`
    border-radius: 10px;
    width: 221px;
    height: 45px;
    align-self: center;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    background: ${primaryColor ? theme.colors.primary : theme.colors.secundary};
  `}
`;

export const TextConfig = styled(Text as StyledButtonProps)`
  ${({ theme, primaryColor }) => css`
    font-size: 20px;
    color: ${!primaryColor ? theme.colors.primary : theme.colors.secundary};
  `}
`;

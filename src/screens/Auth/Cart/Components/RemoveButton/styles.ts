import styled, { css } from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${lighten(0.2, theme.colors.primary)};
    border-radius: 11px;
    padding: 2px;
    align-self: flex-end;
  `}
`;

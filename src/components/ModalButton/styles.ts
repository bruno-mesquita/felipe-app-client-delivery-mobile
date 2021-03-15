import styled, { css } from 'styled-components/native';
import { Button as B } from 'native-base';

export const Button = styled(B)`
  ${({ theme }) => css`
    background-color: ${theme.colors.third};
    border-radius: 50px;
  `}
`;

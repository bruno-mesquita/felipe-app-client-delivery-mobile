import styled, { css } from 'styled-components/native';

import { Button as MyButton } from '../Button';

export const Button = styled(MyButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.third};
    border-radius: 50px;
  `}
`;

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  border: 1px solid;
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;
    height: 0.7px;
    elevation: 10;
    margin: 25px 0 25px 0;
  `}
`;

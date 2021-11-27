import styled, { css } from 'styled-components/native';
import { darken } from 'polished';

interface CardType {
  disabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.View<CardType>`${({ theme, disabled }) => css`
  width: ${theme.metrics.px(120)}px;
  height: ${theme.metrics.px(120)}px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  background-color: ${disabled ? '#c4c4c4' : darken(0.02, theme.colors.primary)};
`}
`;

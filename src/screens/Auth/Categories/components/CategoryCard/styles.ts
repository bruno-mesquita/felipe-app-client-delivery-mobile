import styled from 'styled-components/native';
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

export const DivCard = styled.View`
  align-items: center;
`;

export const Card = styled.View<CardType>`
  width: 80px;
  height: 86%;
  align-items: center;
  justify-content: center;
  border-radius: 60px;

  background-color: ${({ theme, disabled }) => disabled ? '#c4c4c4' : darken(0.02, theme.colors.primary)};
`;

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 40px 0 10px 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 100;
    height: 55px;
    width: 55px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.primary};
    elevation: 10;
    position: absolute;
    bottom: 4px;
    right: 15px;
  `}
`;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

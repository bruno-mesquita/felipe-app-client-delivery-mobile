import styled, { css } from 'styled-components/native';

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
    bottom: 15px;
    right: 15px;
  `}
`;

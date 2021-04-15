import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Texts = styled.View`
  width: 25%;
  padding: 10px;
`;

export const Prices = styled.View`
  align-items: center;
  width: 25%;
  padding: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
`;

export const ViewButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 100%;

    height: 0.7px;
    elevation: 10;
    margin: 7px 0 7px 0;
  `}
`;

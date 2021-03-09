import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
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
    bottom: 15px;
    right: 15px;
  `}
`;

export const Header = styled.View``;

export const Establishments = styled.FlatList.attrs(props => ({
  ...props,
  contentContainerStyle: { alignItems: 'center' },
}))`
  width: 100%;
`;

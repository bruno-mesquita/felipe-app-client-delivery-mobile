import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.ScrollView`
  width: 100%;
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 90%;

    height: 0.7px;
    elevation: 10;
    margin: 25px 0 25px 0;
  `}
`;

export const Header = styled.View`
  padding-left: ${getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  width: 100%;
  flex-direction: row;
`;

export const EstablishmentDetail = styled.View`
  width: 70%;
  padding: 20px 10px 0px 20px;
  justify-content: space-between;
`;

export const EstablishmentDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 15px;
  align-self: center;
`;

export const EstablishmentDetailInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

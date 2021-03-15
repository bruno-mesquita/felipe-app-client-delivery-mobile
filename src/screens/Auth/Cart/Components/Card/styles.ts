import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  padding: 10px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Info = styled.View`
  justify-content: space-between;
  align-items: center;
  width: ${width * 0.66}px;
  padding: 5px;
`;

export const Image = styled.Image``;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Prices = styled.View`
  flex-direction: row;
  width: ${width * 0.35}px;
  justify-content: space-around;
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

export const ViewValues = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.66}px;
  padding: 0 5px 0 5px;
  align-items: flex-end;
`;

export const ViewButton = styled.View`
  align-items: flex-end;
  padding-right: 5px;
  width: ${width * 0.66}px;
`;

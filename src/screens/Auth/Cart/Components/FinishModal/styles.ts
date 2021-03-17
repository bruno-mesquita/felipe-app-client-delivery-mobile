import { ComponentType } from 'react';
import { ViewProps, View } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

interface ContentProps extends ViewProps {
  payment: string;
}

export const Container = styled.View`
  width: ${width * 0.9}px;
  padding: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: ${width * 0.8}px;
  justify-content: flex-end;
`;

export const Content = styled<ComponentType<ContentProps>>(View as any)`
  justify-content: space-between;
  align-items: center;
  height: ${props => height * (props.payment === 'Dinheiro' ? 0.4 : 0.3)}px;
`;

import styled from 'styled-components/native';
import { Input as NBInput } from 'native-base';

export const Container = styled.View`
  height: 69px;

  box-shadow: 100px 100px 100px #000;
  margin: 4px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 2px;
`;

export const ContainerTextField = styled.View`
  width: 95%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-color: #770202;

  padding-left: 5px;
  padding-right: 17px;
`;

export const TextField = styled(NBInput).attrs(props => ({
  placeholderTextColor: '#C4C4C4',
  ...props,
}))`
  height: 43px;
  /* width: 295px; */

  border-radius: 10px;

  background-color: #770202;
  color: #fff;
`;

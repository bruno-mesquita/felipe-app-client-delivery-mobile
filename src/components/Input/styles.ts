import styled from 'styled-components/native';
import { Input as NBInput } from 'native-base';
import { Ionicons as IconPassword } from '@expo/vector-icons';

export const Container = styled.View`
  width: 95%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  background-color: #770202;
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

export const PasswordIcon = styled(IconPassword)`
  margin-right: 10px;
`;

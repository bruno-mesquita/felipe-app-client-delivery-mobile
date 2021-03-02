import styled from 'styled-components/native';
import { Input as NBInput, Item as NBItem } from 'native-base';

export const TextField = styled(NBInput).attrs(props => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
  placeholderTextColor: '#C4C4C4',
  ...props,
}))`
  height: 43px;
  width: 295px;

  border-radius: 10px;

  background-color: #770202;
  color: #fff;
`;

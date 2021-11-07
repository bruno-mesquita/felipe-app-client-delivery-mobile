import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { removeItem } from '@store/ducks/cart/cart.actions';

import { Container } from './styles';
import { RemoveButtonProps } from './props';

export const RemoveButton = ({ id }: RemoveButtonProps) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeItem(id));
  };

  return (
    <Container onPress={remove}>
      <MaterialIcons name="close" color={colors.secundary} />
    </Container>
  );
};

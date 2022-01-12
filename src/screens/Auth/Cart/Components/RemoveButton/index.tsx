import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { cartActions } from '@store/reducers/cart';
import { useAppDispatch } from '@store/hooks';

import { Container } from './styles';
import { RemoveButtonProps } from './props';

export const RemoveButton = ({ id }: RemoveButtonProps) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const remove = () => dispatch(cartActions.removeItem({ itemId: id }));

  return (
    <Container onPress={remove}>
      <MaterialIcons name="close" color={colors.secundary} />
    </Container>
  );
};

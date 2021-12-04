import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';
import { ModalHeaderProps } from './props';

export const ModalHeader = ({ onClose, children }: ModalHeaderProps) => {
  const { colors } = useTheme();

  return (
    <Container style={{ justifyContent: children ? 'space-between' : 'flex-end' }}>
      <Text>{children ? children : null}</Text>
      <Ionicons onPress={onClose} name="close-circle" size={20} color={colors.primary} />
    </Container>
  );
};

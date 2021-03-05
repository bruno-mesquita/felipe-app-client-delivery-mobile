import { ModalProps } from 'react-native';

import { Props as DefaultProps } from '../../utils/props';

export interface Props extends DefaultProps, ModalProps {}

export interface ModalBaseHandle {
  open: () => void;
  close: () => void;
}

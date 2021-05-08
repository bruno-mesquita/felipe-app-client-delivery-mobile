import { ReactNode } from 'react';

export interface ModalHeaderProps {
  onClose: () => void;
  children?: ReactNode | undefined;
}

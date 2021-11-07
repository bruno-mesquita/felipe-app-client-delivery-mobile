import { MutableRefObject } from 'react';

export interface ModalBaseHandle {
  open: () => void;
  close: () => void;
}

export interface ModalBaseProps {
  modalRef: MutableRefObject<ModalBaseHandle>;
}

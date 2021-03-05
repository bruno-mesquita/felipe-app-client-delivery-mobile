import {
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react';
import { Modal } from 'react-native';

import { ModalBaseHandle, Props } from './props';

const ModalBase: ForwardRefRenderFunction<ModalBaseHandle, Props> = (
  { children, ...rest },
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  useImperativeHandle(ref, () => ({ open, close }));

  return (
    <Modal visible={visible} {...rest}>
      {children}
    </Modal>
  );
};

export default forwardRef(ModalBase);

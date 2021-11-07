import { useImperativeHandle, forwardRef, useState, useCallback } from 'react';
import { Modal, View, ModalProps } from 'react-native';

import { ModalBaseHandle } from './props';
import { Container, styles } from './styles';

export const ModalBase = forwardRef<ModalBaseHandle, ModalProps>(
  ({ children, ...rest }, ref) => {
    const [visible, setVisible] = useState(false);

    const open = useCallback(() => setVisible(true), []);
    const close = useCallback(() => setVisible(false), []);

    useImperativeHandle(ref, () => ({ open, close }));

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => close()}
        {...rest}
      >
        <Container>
          <View style={styles.modalView}>{children}</View>
        </Container>
      </Modal>
    );
  },
);

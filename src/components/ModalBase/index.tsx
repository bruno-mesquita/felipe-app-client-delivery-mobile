import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { Modal, View } from 'react-native';

import { ModalBaseHandle, Props } from './props';
import { Container, styles } from './styles';

const ModalBase = forwardRef<ModalBaseHandle, Props>(
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
        {...rest}
      >
        <Container onPress={close} activeOpacity={0}>
          <View style={styles.modalView}>{children}</View>
        </Container>
      </Modal>
    );
  },
);

export default ModalBase;

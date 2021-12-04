import { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';

import { Modal, ModalBase } from '@components';
import api from '@services/api';
import { useSelectedOrder } from '@contexts/OrderContext';
import formatNumber from '@utils/format-number';

import { Container, Row, ProductsView } from './styles';
import { OrderInfoProps, OrderInfo } from './props';

export const OrderInfoModal = ({ modalRef }: OrderInfoProps) => {
  const { selectedItem, setSelectedItem } = useSelectedOrder();

  const [orderInfo, setOrderInfo] = useState<OrderInfo>();

  const onClose = () => {
    modalRef.current?.close();
    setSelectedItem({ orderId: null, evaluationId: null });
  };

  const getOrder = useCallback(async () => {
    try {
      if (selectedItem.orderId) {
        const { data } = await api.get(`/orders/${selectedItem.orderId}`);

        setOrderInfo(data.result);
      }
    } catch (err) {
      onClose();
    }
  }, [selectedItem]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  return (
    <ModalBase ref={modalRef}>
      <Container>
        <Modal.Header onClose={onClose}>Detalhe do pedido</Modal.Header>
        <Text>{`Endereço de entrega: ${orderInfo?.order.address_client.nickname}`}</Text>
        <ProductsView>
          {orderInfo?.items.map((item, index) => (
            <Row key={index.toString()}>
              <Text>{`${item.quantity}x ${item.product.name}`}</Text>
              <Text>{formatNumber(item.total)}</Text>
            </Row>
          ))}
        </ProductsView>
        <Text style={{ alignSelf: 'flex-end' }}>{`Total: ${formatNumber(orderInfo?.order.total || 0)}`}</Text>
      </Container>
    </ModalBase>
  );
};

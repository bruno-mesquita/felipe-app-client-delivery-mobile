import { AirbnbRating } from 'react-native-ratings';
import { FormControl, TextArea, Button, Flex, Icon } from 'native-base';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Formik, ErrorMessage } from 'formik';

import { useSelectedOrder } from '@contexts/OrderContext';
import { ModalBase } from '@components';
import api from '@services/api';
import { useGetRate, IRate } from '@hooks';

import type { EvaluationProps } from './props';
import schema from './schema';

export const EvaluationModal = ({ modalRef }: EvaluationProps) => {
  const { colors } = useTheme();
  const { selectedItem } = useSelectedOrder();

  const { rate } = useGetRate(selectedItem.evaluationId);

  const onSubmit = (values: IRate) => {
    api
      .post('/rates', {
        orderId: selectedItem.orderId,
        ...values,
      })
      .then(() => {
        modalRef.current?.close();
      });
  };

  return (
    <Formik
      initialValues={rate}
      onSubmit={onSubmit}
      enableReinitialize
      validationSchema={schema}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      }) => (
        <ModalBase ref={modalRef}>
          <Flex w="100%" align="center" p="15px">
            <Icon
              onPress={() => modalRef.current?.close()}
              size="20px"
              as={<Ionicons name="close-circle" color={colors.primary} />}
              color="#9E0404"
              alignSelf="flex-end"
            />
            <FormControl w="100%">
              <FormControl.Label>Avaliação</FormControl.Label>
              <TextArea
                p={3}
                numberOfLines={5}
                variant="outline"
                bg="#fff"
                value={values.message}
                placeholder="Faça uma avaliação do seu pedido"
                isDisabled={values.value === 0}
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
              />
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!(errors?.value && touched?.value)}
            >
              <AirbnbRating
                ratingContainerStyle={{ marginVertical: 10 }}
                size={20}
                showRating={false}
                defaultRating={values.value}
                onFinishRating={handleChange('value')}
              />
              <ErrorMessage name="value" component={FormControl.ErrorMessage} />
            </FormControl>
            {!selectedItem.evaluationId ? (
              <Button
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
                isLoadingText="Avaliando..."
                bg="#F8C200"
                _text={{ color: '#fff' }}
                rounded="15px"
                onPress={() => handleSubmit()}
              >
                Avaliar
              </Button>
            ) : null}
          </Flex>
        </ModalBase>
      )}
    </Formik>
  );
};

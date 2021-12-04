import { Text } from 'react-native';
import { ErrorMessage, Formik } from 'formik';

import { Button } from '@components';
import { Field } from '@form';
import { ScreenNotAuthProps } from '@utils/ScreenProps';

import { Container, BackGround, ContainerLogo, Logo, ContentForm, ContainerInput, ContainerButton } from './styles';
import { Values } from './props';

export const ForgotPassword = ({ navigation }: ScreenNotAuthProps<'ForgotPassword'>) => {
  const codeValue: Values = {
    email: '',
  };

  const onSubmit = (values: Values) => {
    navigation.navigate('CodeToPassword');
  };

  return (
    <Container>
      <BackGround source={require('../../../assets/images/fundo.png')}>
        <ContainerLogo>
          <Logo source={require('../../../assets/images/logo.png')} />
        </ContainerLogo>

        <Formik initialValues={codeValue} onSubmit={onSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <ContentForm>
              <ContainerInput>
                <Field value={values.email} placeholder="E-mail" onChangeText={handleChange('email')} label="E-mail" />
                <ErrorMessage component={Text} name="email" />
              </ContainerInput>

              <ContainerButton>
                <Button onPress={() => handleSubmit()}>Enviar</Button>
              </ContainerButton>
            </ContentForm>
          )}
        </Formik>
      </BackGround>
    </Container>
  );
};

import Constants from 'expo-constants';
import { Text, Image, Flex } from 'native-base';

export const AboutApp = () => (
  <Flex flex={1} justify="space-around" align="center" bg="#9E0404">
    <Image
      source={require('../../../assets/images/logo.png')}
      alt="Logo Flipp"
    />
    <Text color="#fff">Versão: {Constants.manifest.version}</Text>
  </Flex>
);

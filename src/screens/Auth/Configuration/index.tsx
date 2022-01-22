import { TouchableOpacity } from 'react-native';
import { Flex, Text, Divider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Configuration = () => {
  const navigation = useNavigation<any>();

  return (
    <Flex flex={1} px="20px">
      <TouchableOpacity onPress={() => navigation.navigate('Account')}>
        <Flex
          px="10px"
          py="15px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>Minha conta</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>

      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate('TermsUse')}>
        <Flex
          p="10px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>Termos de uso</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>

      <Divider />
      <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
        <Flex
          p="10px"
          flexDirection="row"
          align="center"
          justify="space-between"
        >
          <Text>Sobre o aplicativo</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </Flex>
      </TouchableOpacity>
      <Divider />
    </Flex>
  );
};

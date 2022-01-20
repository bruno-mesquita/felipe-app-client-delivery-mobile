import type { FC } from 'react';
import { ImageBackground } from 'react-native';
import { Flex, Image } from 'native-base';

export const Layout: FC = ({ children }) => {
  return (
    <Flex flex={1} safeArea>
      <ImageBackground
        style={{ flex: 1, alignItems: 'center' }}
        source={require('../../../assets/images/fundo.png')}
      >
        <Image
          alignSelf="center"
          resizeMode="contain"
          source={require('../../../assets/images/logo.png')}
          size="250px"
          alt="Logo Flipp"
        />

        {children}
      </ImageBackground>
    </Flex>
  );
};

import React from 'react';
import { Image, ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';

interface Props {
  image: string;
  loading: boolean;
}

const EstablishmentImage = ({ image, loading }: Props) => {
  const { colors } = useTheme();

  return (
    <>
      {loading ? (
        <View
          style={{
            borderRadius: 50,
            height: 90,
            width: 90,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator color={colors.primary} size={60} />
        </View>
      ) : (
        <Image
          source={image}
          style={{ height: 90, width: 90, borderRadius: 100 }}
        />
      )}
    </>
  );
};

export default EstablishmentImage;

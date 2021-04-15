import React from 'react';
import { Image } from 'react-native';

interface Props {
  image: any;
}

const EstablishmentImage = ({ image }: Props) => (
  <Image source={image} style={{ height: 90, width: 90, borderRadius: 100 }} />
);

export default EstablishmentImage;

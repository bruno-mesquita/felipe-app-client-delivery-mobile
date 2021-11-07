import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');

const FIGMA_WIDTH = 711;

const px = (valuePx: number) => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100;

  return PixelRatio.roundToNearestPixel((width * parseFloat(valuePx)) / 100);
}

export default {
  px,
}

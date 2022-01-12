import { extendTheme } from 'native-base';

export default extendTheme({
  components: {
    Input: {
      baseStyle: {
        bg: '#770202',
        color: '#fff',
        borderWidth: '0px',
      },
      defaultProps: {
        size: 'md',
        placeholderTextColor: '#C4C4C4',
        borderWidth: '0px',
      },
    },
    Button: {
      baseStyle: {
        rounded: '8px',
      },
      defaultProps: {
        bg: '#fff',
        py: '11px',
        _text: {
          color: '#000',
          fontSize: 'md',
          fontWeight: 'semibold',
        },
        _pressed: { bg: '#808080' },
      },
    },
  },
});

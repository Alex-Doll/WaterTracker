import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors = {
  primary: '#0093b7',
  secondary: '#63cdd7',
  tertiary: '#a0c5cf',
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Futura',
};

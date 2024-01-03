import { Dimensions, StyleSheet } from 'react-native';

const {height} = Dimensions.get('window');
export const attractionStyle = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainImage: {
    width: '100%',
    height: 0.5 * height,
  }
});

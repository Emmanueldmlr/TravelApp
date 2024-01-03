import { Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

export const infoCardStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    marginHorizontal: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

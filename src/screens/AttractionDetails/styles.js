import { Dimensions, StyleSheet } from 'react-native';

const {height} = Dimensions.get('window');
export const attractionStyle = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainImage: {
    width: '100%',
    height: 0.5 * height,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 40,
    width: '90%',
  },
  icon: {
    width: 40,
    height: 40,
  },
  footer: {
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
    flexWrap: 'wrap', 
    justifyContent: 'center',
  },
  imageThumbnail: {
    width: 30,
    height: 30,
    borderRadius: 10,
    margin: 8
  },
});

import { Dimensions, StyleSheet } from 'react-native';

const {height} = Dimensions.get('window');
export const attractionStyle = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainImage: {
    width: '100%',
    height: 0.5 * height,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '90%',
  },
  location: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  map: {height: 300, width: '100%', marginTop: 20},
  button: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4681A3',
    padding: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
});

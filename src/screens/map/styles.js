import { StyleSheet } from 'react-native';

export const mapStyles = StyleSheet.create({
  container: {
    margin: 20,
  },
  backContainer:{
    position: 'absolute',
    top: 40,
    left: 20,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#000',
  },
  icon: {
    width: 40,
    height: 40,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

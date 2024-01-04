import { StyleSheet } from 'react-native';

export const mapStyles = StyleSheet.create({
  backContainer:{
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#000',
    alignItems: 'center',
    width: "90%",
    margin: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

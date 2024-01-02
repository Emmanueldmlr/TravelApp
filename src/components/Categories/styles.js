import { StyleSheet } from 'react-native';

export const categoryStyles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    marginRight: 17,
    paddingVertical: 10,
  },
  selectedItem: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#4681A3',
  },
  container: {
    marginRight: -20,
  }
});

import { Dimensions, StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');

export const attractionCardStyles = StyleSheet.create({
  card: {
    marginRight: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  image: {
    width: (width - 56) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 12,
    marginLeft: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 12,
    marginTop: 4,
  },
  location: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  locationImage: {
    width: 8,
    height: 8,
    marginRight: 4,
  },
});

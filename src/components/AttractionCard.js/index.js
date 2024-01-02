import React from 'react'
import { View, Text, Image,  TouchableOpacity } from 'react-native';
import { attractionCardStyles } from './styles';

const AttractionCard = ({ image, name, location, handler }) => {
  return (
    <TouchableOpacity style={attractionCardStyles.card} onPress={handler}>
      <Image style={attractionCardStyles.image} source={{uri: image}} />
      <Text style={attractionCardStyles.title}>{name}</Text>
      <View style={attractionCardStyles.locationContainer}>
        <Image
          source={require('../../assets/location.png')}
          style={attractionCardStyles.locationImage}
        />
        <Text style={attractionCardStyles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default AttractionCard;

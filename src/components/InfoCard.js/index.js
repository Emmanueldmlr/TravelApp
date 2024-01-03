import React from 'react'
import { View, Text, Image,   } from 'react-native';
import {infoCardStyles} from './styles';

const InfoCard = ({ image, text }) => {
  return (
    <View style={infoCardStyles.container}>
      <Image source={image} style={infoCardStyles.image} />
      <Text style={infoCardStyles.text}>{text}</Text>
    </View>
  );
}

export default InfoCard;

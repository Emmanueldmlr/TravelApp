import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { attractionStyle } from './styles';
const AttractionDetails = ({route}) => {
  const { attraction } = route?.params || {};
  const mainImage = attraction?.images[0];
  return (
    <SafeAreaView style={attractionStyle.container}>
      <ImageBackground source={{uri: mainImage}} imageStyle={{borderRadius: 20}} style={attractionStyle.mainImage}/>
    </SafeAreaView>
  );
};

export default AttractionDetails;

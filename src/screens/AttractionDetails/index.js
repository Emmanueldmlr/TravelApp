import React from 'react';
import { SafeAreaView, ImageBackground, Image, View, Pressable, Text } from 'react-native';
import { attractionStyle } from './styles';
const AttractionDetails = ({route, navigation}) => {
  const { attraction } = route?.params || {};
  const mainImage = attraction?.images[0];
  return (
    <SafeAreaView style={attractionStyle.container}>
      <ImageBackground
        source={{uri: mainImage}}
        imageStyle={{borderRadius: 20}}
        style={attractionStyle.mainImage}>
        <View style={attractionStyle.header}>
          <Pressable hitSlop={8} onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/back.png')}
              style={attractionStyle.icon}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              source={require('../../assets/share.png')}
              style={attractionStyle.icon}
            />
          </Pressable>
        </View>
        <View style={attractionStyle.footer}>
          {attraction?.images.map((image, index) => (
            <Image
              source={{uri: image}}
              style={attractionStyle.imageThumbnail}
              key={index}
            />
          ))}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AttractionDetails;

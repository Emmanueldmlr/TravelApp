import React, {useState} from 'react';
import { SafeAreaView, ImageBackground, Image, View, Pressable, Text, ScrollView } from 'react-native';
import InfoCard from '../../components/InfoCard.js';
import Title from '../../components/Title';
import { attractionStyle } from './styles';
import MapView from 'react-native-maps';

const AttractionDetails = ({route, navigation}) => {
  const { attraction } = route?.params || {};
  const [mainImage, setMainImage] = useState(attraction?.images[0]);
  

  const viewGallery = () => {
    navigation.navigate('Gallery', {images: attraction?.images});
  };

  return (
    <ScrollView
      style={attractionStyle.container}
      showsVerticalScrollIndicator={false}>
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
          <Pressable hitSlop={8} onPress={viewGallery}>
            <Image
              source={require('../../assets/share.png')}
              style={attractionStyle.icon}
            />
          </Pressable>
        </View>
        <View style={attractionStyle.footer}>
          {attraction?.images.slice(0, 5).map((image, index) => (
            <Pressable onPress={() => setMainImage(image)} key={index}>
              <Image
                source={{uri: image}}
                style={attractionStyle.imageThumbnail}
              />
            </Pressable>
          ))}
        </View>
      </ImageBackground>
      <View style={attractionStyle.details}>
        <Text style={attractionStyle.location}>{attraction?.name}</Text>
        <Text style={attractionStyle.price}>{attraction?.entry_price}</Text>
      </View>
      <Text style={attractionStyle.country}>{attraction?.country}</Text>
      <InfoCard
        text={attraction?.address}
        image={require('../../assets/location_circle.png')}
      />
      <InfoCard
        text={`OPEN
${attraction?.opening_time} - ${attraction?.closing_time}`}
        image={require('../../assets/schedule.png')}
      />
      <MapView
        style={attractionStyle.map}
        initialRegion={{
          latitude: attraction.coordinates.lat,
          longitude: attraction.coordinates.lon,
        }}
      />
    </ScrollView>
  );
};

export default AttractionDetails;

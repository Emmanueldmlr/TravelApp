import React, {useState} from 'react';
import { SafeAreaView, ImageBackground, Image, View, Pressable, Text, ScrollView, TouchableOpacity } from 'react-native';
import InfoCard from '../../components/InfoCard.js';
import { attractionStyle } from './styles';
import MapView, {Marker} from 'react-native-maps';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';


const AttractionDetails = ({route, navigation}) => {
  const { attraction } = route?.params || {};
  const [mainImage, setMainImage] = useState(attraction?.images[0]);
  const coordinates = {
    latitude: attraction.coordinates.lat,
    longitude: attraction.coordinates.lon,
  };
  const viewGallery = () => {
    navigation.navigate('Gallery', {images: attraction?.images});
  };

  const handleShare = async() => {
    try{
      const base64Image = await ImgToBase64.getBase64String(attraction.images[0]);
      Share.open({message: attraction.name, url: `data:image/png;base64,${base64Image}`})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err && console.log(err);
        })
    }
    catch(err){
      console.log(err)
    }

  }

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
          <Pressable hitSlop={8} onPress={handleShare}>
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
        <TouchableOpacity onPress={viewGallery}>
          <Text style={attractionStyle.location}>{attraction?.name}</Text>
        </TouchableOpacity>
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
      <MapView style={attractionStyle.map} initialRegion={coordinates}>
        <Marker coordinate={coordinates} title={attraction.name} />
      </MapView>
      <TouchableOpacity
        style={attractionStyle.button}
        onPress={() =>
          navigation.navigate('Map', {
            coordinates,
            name: attraction.name,
            country: attraction.country,
          })
        }>
        <Text style={attractionStyle.buttonText}>View on Map</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AttractionDetails;

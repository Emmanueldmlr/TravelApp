import React from 'react';
import {FlatList, SafeAreaView, Image, Pressable} from 'react-native';
import { galleryStyles } from './styles';
const Gallery = ({route, navigation}) => {
  const {images} = route?.params || [];

  return (
    <SafeAreaView style={galleryStyles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={galleryStyles.image} />
        )}
        numColumns={ 1}
        showsVerticalScrollIndicator={false}
      />
      <Pressable  onPress={() => navigation.goBack()} style={galleryStyles.goBackContainer}>
        <Image
          source={require('../../assets/back.png')}
          style={galleryStyles.icon}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Gallery;

import React from 'react';
import {SafeAreaView, View} from 'react-native';
const Gallery = ({route}) => {
  const {images} = route?.params || [];
  
  return (
    <SafeAreaView>
      <View>
        <Text>Gallery</Text>
      </View>
    </SafeAreaView>
  );
};

export default Gallery;

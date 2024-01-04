import React from 'react';
import {Pressable, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyles} from './styles';

const Map = ({route, navigation}) => {
  const {coordinates, name} = route?.coordinates || {};
  return (
    <View style={mapStyles.container}>
      <MapView style={mapStyles.map} initialRegion={coordinates}>
        <Marker coordinate={coordinates} title={name} />
      </MapView>
      <View style={mapStyles.backContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/back.png")} style={mapStyles.icon}/>
        </Pressable>
        <Text style={mapStyles.title}>{name}</Text>
      </View>
    </View>
  );
};

export default Map;

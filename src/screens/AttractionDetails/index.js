import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
const AttractionDetails = ({route}) => {
  const { attraction } = route?.params || {};
  return (
    <SafeAreaView>
      <View>
        <Text>{attraction?.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AttractionDetails;

import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import { homeStyles } from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={homeStyles.container}>
        <Title title='Where do' style={{ fontWeight: 'light' }} />
        <Title title='you want to go?' />
        <Title title='Explore Attractions' style={homeStyles.subtitle} />
        <Categories/>
      </View>
    </SafeAreaView>
  );
};

export default Home;

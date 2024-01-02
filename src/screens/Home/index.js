import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AttractionCard from '../../components/AttractionCard.js';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import { homeStyles } from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={homeStyles.container}>
        <Title title="Where do" style={{fontWeight: 'light'}} />
        <Title title="you want to go?" />
        <Title title="Explore Attractions" style={homeStyles.subtitle} />
        <Categories />
        <View style={homeStyles.AttractionContainer}>
          <AttractionCard
            image="https://t3.ftcdn.net/jpg/05/68/05/36/360_F_568053606_fty84K8TNjAg2dO82uxgTuajpBrucNQQ.jpg"
            name="Eiffel Tower"
            location="Paris, France"
          />
          <AttractionCard
            image="https://t3.ftcdn.net/jpg/05/68/05/36/360_F_568053606_fty84K8TNjAg2dO82uxgTuajpBrucNQQ.jpg"
            name="Eiffel Tower"
            location="Paris, France"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

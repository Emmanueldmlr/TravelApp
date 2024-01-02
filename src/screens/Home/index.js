import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AttractionCard from '../../components/AttractionCard.js';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import { homeStyles } from './styles';
import attractionsData from '../../data/attractions.json'
import categoriesData from '../../data/categories.json'

const Home = () => {
    const [attractions, setAttractions] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setAttractions(attractionsData);
        setCategories(categoriesData)
    }, [])



    useEffect(() => {
        if (selectedCategory === 'All') {
            setAttractions(attractionsData)
            return
        }
        const filteredAttractions = attractionsData.filter(attraction => {
            return attraction.categories.includes(selectedCategory);
        })
        setAttractions(filteredAttractions)
    }, [selectedCategory])

  return (
    <SafeAreaView>
      <ScrollView
        style={homeStyles.container}
        showsVerticalScrollIndicator={false}>
        <Title title="Where do" style={{fontWeight: 'light'}} />
        <Title title="you want to go?" />
        <Title title="Explore Attractions" style={homeStyles.subtitle} />
        <Categories
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <ScrollView
          contentContainerStyle={homeStyles.AttractionContainer}
          showsVerticalScrollIndicator={false}>
          {attractions.map(attraction => (
            <AttractionCard
              image={attraction.images[0]}
              name={attraction.name}
              location={attraction.country}
              key={attraction.id}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

import React, { useState } from 'react'
import { FlatList, Text } from 'react-native';
import { categoryStyles } from './styles';

const CATEGORY_DATA = [
    {
        id: '1',
        name: 'All',
    },
    {
        id: '2',
        name: 'Popular',
    },
    {
        id: '3',
        name: 'Recommended',
    },
    {
        id: '4',
        name: 'Most Viewed',
    },
    {
        id: '5',
        name: 'Most Visited',
    },
]

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <FlatList
        data={CATEGORY_DATA}
        renderItem={({ item }) => <Text onPress={() => setSelectedCategory(item.name)} style={[categoryStyles.item, selectedCategory === item.name && categoryStyles.selectedItem]}>{item.name}</Text>}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
    />
  )
}

export default Categories;

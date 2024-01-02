import React from 'react'
import { FlatList, Pressable, Text } from 'react-native';
import { categoryStyles } from './styles';

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {
    
  return (
    <FlatList
      style={categoryStyles.container}
      data={categories}
      renderItem={({ item }) => (
        <Pressable onPress={() => setSelectedCategory(item.name)}>
          <Text
            style={[
              categoryStyles.item,
              selectedCategory === item.name && categoryStyles.selectedItem,
            ]}>
            {item.name}
          </Text>
        </Pressable>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
}

export default Categories;

import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { API_URL } from '@env';
import CategoriesCard from '../components/CategoriesCard/CategoriesCard'
import useFetch from '../hooks/useFetch'

function Categories({navigation}) {

  const {loading, data, error} = useFetch(API_URL);

  const handleCategorySelect = strCategory =>{
    navigation.navigate("Meals",{strCategory});
  }

  const renderCategory = ({ item }) => (
      <CategoriesCard 
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
  );
  

  return (
    <View style={{backgroundColor:'orange'}}>
      <FlatList
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );
}

export default Categories;

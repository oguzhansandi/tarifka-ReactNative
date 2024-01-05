import React from 'react'
import { View, FlatList, Text } from 'react-native'
import {API_FILTER_URL} from '@env'
import useFetch from '../hooks/useFetch'
import MealsCard from '../components/MealsCard/MealsCard'

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {loading, error, data} = useFetch(`${API_FILTER_URL}=${strCategory}`);

  const renderMeals = ({item}) => (
    <MealsCard
      meals = {item}
      onSelect={() => handleMealSelect(item.idMeal)}  
    />
  )

  const handleMealSelect = idMeal => {
    navigation.navigate("Detail",{idMeal});
  }

  return (
    <View style={{backgroundColor:'orange'}}>
      <FlatList 
        data={data.meals}
        renderItem={renderMeals}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  )
}

export default Meals;
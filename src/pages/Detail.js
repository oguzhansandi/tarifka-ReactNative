import React from 'react'
import { FlatList } from 'react-native'
import {API_FILTER_MEAL} from '@env'
import useFetch from '../hooks/useFetch'
import MealDetailCard from '../components/MealDetailCard/MealDetailCard'

const Detail = ({route}) => {
    const {idMeal} = route.params;
    const {loading, data, error} = useFetch(`${API_FILTER_MEAL}=${idMeal}`)
    
    const renderMeal = ({item}) => (
        <MealDetailCard 
            meal = {item}
        />
    )
    return (
        <FlatList
            data = {data.meals}
            renderItem = {renderMeal}
            keyExtractor={(item) => item.idMeal}

        />
    )
}

export default Detail
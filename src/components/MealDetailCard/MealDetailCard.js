import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './MealDetailCard.style'
import OpenURLButton from '../urlButton/OpenUrlButton'


const MealDetailCard = ({meal}) => {

  const imageUrl = meal.strMealThumb ? { uri: meal.strMealThumb } : require('../../assets/no-image.png');

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.madeIn}>{meal.strArea}</Text>
      </View>
      <View style={styles.horizontal} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{meal.strInstructions}</Text>
      </View>
      <OpenURLButton url={meal.strYoutube} style={styles.youtubeBtn}>
        Watch on Youtube
      </OpenURLButton>
      
    </View>
  )
}

export default MealDetailCard
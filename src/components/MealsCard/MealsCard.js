import React from 'react'
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './MealsCard.style'

const MealsCard = ({meals, onSelect}) => {
  const imageUrl = meals.strMealThumb ? { uri: meals.strMealThumb } : require('../../assets/no-image.png');

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={imageUrl}
            />
            <View style={styles.overlayContainer}>
                <View style={styles.overlay}>
                    <Text style={styles.text}> {meals.strMeal} </Text>
                </View>
            </View>
            </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard
import { View, TouchableWithoutFeedback, Text, Image,  } from 'react-native'
import React from 'react'
import styles from './CategoriesCard.style';

const CategoriesCard = ({ category, onSelect }) => {
  const imageUrl = category.strCategoryThumb ? { uri: category.strCategoryThumb } : require('../../assets/no-image.png');

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageUrl} />
        <Text style={styles.text}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default CategoriesCard;
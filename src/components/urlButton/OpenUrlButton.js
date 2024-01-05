import React from 'react';
import { TouchableOpacity, Linking, StyleSheet, Text} from 'react-native';

const OpenURLButton = ({ url, children }) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);
    await Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={styles.youtubeBtn}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default OpenURLButton;

const styles = StyleSheet.create({
    youtubeBtn : {
        backgroundColor:"#FF0000", 
        marginTop : 15,
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 25,
        borderRadius : 10,
        padding : 10,
    },
    buttonText : {
      textAlign : "center",
      color : '#fff',
      fontSize : 16,
      fontWeight : "bold",
    }
  });
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        position: 'relative',
        margin : 10,
    },
    image: {
        borderRadius : 10,
        width: '100%',
        height: 200, // or whatever height you want
        resizeMode: 'cover',
    },
    overlayContainer:{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    overlay: {
        height : 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 10, 
        borderBottomLeftRadius : 10,
        borderBottomRightRadius : 10,
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign : 'center',
    },
});
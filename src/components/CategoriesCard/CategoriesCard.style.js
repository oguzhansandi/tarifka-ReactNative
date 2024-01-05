import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container : {
        flexDirection: 'row',
        margin : 10,
        marginRight : 0,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius : 50,
        borderTopLeftRadius : 50,
    },
    image:{
        width : 100,
        height : 100,
        resizeMode : 'contain',
    },
    text:{
        flex : 1,
        alignSelf : 'center',
        marginLeft : 10,
        fontWeight : 'bold',
        fontSize : 18,
    }
})
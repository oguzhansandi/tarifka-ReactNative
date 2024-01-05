import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor : '#F2F2F2',
    },
    image:{
        width : 'auto',
        height : 300,
        resizeMode : 'stretch'
    },
    titleContainer:{
        marginLeft : 5, 
    },
    title : {
        marginTop : 5,
        color : '#A52A2A',
        fontSize : 24,
        fontWeight : 'bold',
    },
    madeIn : {
        marginTop : 5,
        marginBottom : 5,
        color : '#A52A2A',
        fontSize : 16,
        fontWeight : 'bold',
    },
    horizontal : {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    description : {
        marginLeft : 5,
    },
    descriptionText : {
        color : '#000000',
    },
})
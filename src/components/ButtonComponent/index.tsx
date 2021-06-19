import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import { SCREENS } from '../../constants'
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window')
const ButtonComponent = (props) => {
    console.log("button",props)
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.button}>
            <Button
            color="#33BFB7"
title={props.data.title}
onPress={()=>navigation.navigate(SCREENS.DYNAMIC_PAGE,{url:props.data.navigateTo})}
/>
            </View>
        </View>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 7,


    },
    button:{
        margin: 10
    }
})

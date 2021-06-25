import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailBox = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:21, fontWeight:'bold'}}>{props.title}</Text>
            <Text numberOfLines={5}>
               {props.description}
            </Text>
        </View>
    )
}

export default DetailBox

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#bbedea',
        margin:7,
        borderRadius:5,
        padding:10
    }
})
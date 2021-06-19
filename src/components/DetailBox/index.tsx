import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DetailBox = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:21, fontWeight:'bold'}}>Details</Text>
            <Text numberOfLines={5}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repellendus autem quisquam, molestias hic omnis minus eveniet id nobis animi in, enim aperiam tempora sapiente iure! Qui quisquam vero harum.
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
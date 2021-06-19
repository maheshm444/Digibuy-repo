import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:21}}>Product Details</Text>
            <View style={styles.detail}>
                <Text style={styles.key}>Neck</Text>
                <Text style={styles.value}>High Neck</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.key}>Sleeve style</Text>
                <Text style={styles.value}>Regular style</Text>
            </View>
            <View style={styles.detail}>
                <Text style={styles.key}>Sleeve style</Text>
                <Text style={styles.value}>Regular style</Text>
            </View>
        </View>
    )
}

export default Details


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#bbedea',
        margin:7,
        borderRadius:5,
        padding:10
    },
    detail:{
        flexDirection:'row',
    },
    key:{
        color: '#18181833',
        flex:1
    },
    value:{
        flex:1
    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:21}}>{props.title}</Text>
           {props.keyValuePair.map(({key,value})=>(
            <View style={styles.detail}>
               <Text style={styles.key}>{key}</Text>
               <Text style={styles.value}>{value}</Text>
           </View>
           ))}
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
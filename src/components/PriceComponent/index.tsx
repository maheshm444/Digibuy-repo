import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PriceComponent = ({price, mrp}) => {
    const discount = ((mrp-price)*100/mrp).toFixed(0)
    return (
        <View style={styles.priceContainer}>
                <Text style={styles.priceText}>₹ {price}</Text>
                <Text style={styles.mrpText}>₹ {mrp}</Text>
                <Text style={styles.discount}>{discount}% off</Text>
        </View>
    )
}

export default PriceComponent

const styles = StyleSheet.create({
    priceContainer:{
        flexDirection:"row",
        marginTop:5
    },
    priceText:{
        fontSize:21,
        fontWeight:'bold'
    },
    mrpText:{
        fontSize:21,
        textDecorationLine:"line-through",
        color:'gray',
        fontWeight:'bold',
    marginLeft: 15,
    marginRight:15
    },
    discount:{
        fontSize:21,
        color:'#72cdc8',
        fontWeight:'bold',
    },

})
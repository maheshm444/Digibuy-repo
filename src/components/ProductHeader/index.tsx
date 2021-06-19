import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PriceComponent from '../PriceComponent'
import Rating from '../Rating'
//import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProductHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Casual regular sleve solid woman top</Text>
            <PriceComponent mrp={2000} price={1500}/>
            <View style={styles.ratingContainer}>
                <Rating/> 
            </View>
        </View>
    )
}

export default ProductHeader

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:15
    },
    title:{
        fontSize:21,
        fontFamily:'sarala'
    },
    priceContainer:{
        flexDirection:"row",
        marginTop:5
    },
    price:{
        fontSize:21,
        fontWeight:'bold'
    },
    mrp:{
        fontSize:21,
        textDecorationLine:"line-through",
        color:'gray',
        fontWeight:'bold',
    marginLeft: 20,
    marginRight:20
    },
    discount:{
        fontSize:21,
        color:'#72cdc8',
        fontWeight:'bold',
    },
    ratingContainer:{
        flexDirection:'row'
    }

})
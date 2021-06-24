import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PriceComponent from '../PriceComponent'
import Rating from '../Rating'
//import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProductHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <PriceComponent mrp={props.mrp} price={props.price}/>
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
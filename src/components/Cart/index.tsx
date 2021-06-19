import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import ButtonComponent from '../ButtonComponent'
import PriceComponent from '../PriceComponent'
import QuantityDropdown from '../QuantityDropdown'
const {height, width} = Dimensions.get('window')
const Cart = (props) => {
    return (
        <View style={styles.cart}>

         <View style={styles.cartDetails}>
            <View style={styles.left}>
                {/*image */}
                <Image style={styles.image} source={{ uri:'https://i.pinimg.com/564x/79/b4/79/79b479f2fed5feba1e14d1716585e623.jpg' }} />  
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Campus Sutra</Text>
                <Text numberOfLines={1}>Campus Sutra Men Blue Colourblocked Round Neck T-shirt</Text>
                <View style={styles.quantity}>
                    <Text style={styles.quantityText}>Quantity</Text>
                    <QuantityDropdown/>
                </View>
                <PriceComponent price={1000} mrp={1200}/>
                <Text style={{fontSize:10, color:'gray'}}>Delivered by tomorrow wednesday | free</Text>
            </View>
         </View>

         <View style={styles.button}>
            <ButtonComponent data={props.data} onPress={()=>console.log("Item removed")} title="- Remove"/>
         </View>


        </View>
    )
}




const styles= StyleSheet.create({
    cart:{
        backgroundColor:'#bbedea',
        height: height/3,
        margin:5,
        borderRadius:5,
        
    },
    cartDetails:{
        flex:1,
        flexDirection:'row',
        padding: 5,
        
    },
    left:{
        flex:1,
        marginRight:10,
    },
    right:{
        flex: 2,

        marginRight:10,
    },
    image:{
        height: height/5,
        borderRadius:5,
        padding: 10
    },
    title:{
        fontSize:21,
        fontWeight:'bold'
    },
    quantityText:{
        fontSize:18
    },
    quantity:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15

    },
    button:{
    flexDirection:'row'
    }

})

export default Cart
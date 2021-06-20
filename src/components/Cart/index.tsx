import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import ButtonComponent from '../ButtonComponent'
import PriceComponent from '../PriceComponent'
import QuantityDropdown from '../QuantityDropdown'
const {height, width} = Dimensions.get('window')
const Cart = ({data}) => {

    const [qty, setQty] = useState(1)
    const changeQuantity =(x)=>{
        setQty(x)
    }
    return (
        <View style={styles.cart}>

         <View style={styles.cartDetails}>
            <View style={styles.left}>
                {/*image */}
                <Image style={styles.image} source={{ uri:data.productImage }} />  
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{data.productTitle}</Text>
                <Text numberOfLines={1}>{data.productHeader}</Text>
                <View style={styles.quantity}>
                    <Text style={styles.quantityText}>Quantity</Text>
                    <QuantityDropdown changeQuantity={changeQuantity} countInStock={data.countInStock}/>
                </View>
                <PriceComponent price={data.price*qty} mrp={data.mrp*qty}/>
                <Text style={{fontSize:10, color:'gray'}}>{data.status}</Text>
            </View>
         </View>

         <View style={styles.button}>
            <ButtonComponent data={data} onPress={()=>console.log("Item removed")} title="- Remove"/>     
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
import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import ButtonComponent from '../../components/ButtonComponent'
import Cart from '../Cart'

const SubTotal = (props) => {
    const cartProducts=[1,3,5]
    return (
        <View style={{flex:1}}>
            <ButtonComponent data={props.data} onPress={()=>console.log("proceed to checkout")}/>

          <View style={{flex:1}}>
            <Text style={{fontSize: 18, alignSelf:'center'}}>
              Subtotal ({cartProducts.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold',}}>
                $50
              </Text>
            </Text>
          </View>
        </View>
    )
}

export default SubTotal

// import React from 'react'
// import { View, Text } from 'react-native'

// const CartScreen = () => {
//     return (
//         <View>
//             <Text>cart</Text>
//         </View>
//     )
// }

// export default CartScreen

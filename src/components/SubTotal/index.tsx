import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import ButtonComponent from '../ButtonComponent'
import Cart from '../Cart'

const SubTotal = ({data}) => {

    return (
        <View style={{flex:1}}>
            <ButtonComponent data={data}  onPress={()=>console.log("proceed to checkout")}/>

          <View style={{flex:1}}>
            <Text style={{fontSize: 18, alignSelf:'center'}}>
              Subtotal ({data.items} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold',}}>
              ₹ {data.subTotal}
              </Text>
            </Text>
          </View>
        </View>
    )
}

export default SubTotal

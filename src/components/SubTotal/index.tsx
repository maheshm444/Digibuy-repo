import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import ButtonComponent from '../ButtonComponent';
import Cart from '../Cart';

const SubTotal = (props) => {
  console.log("test",props);
    return (
        <View style={{flex:1}}>
            <ButtonComponent navigateTo={props.navigateTo} title={props.title} onPress={()=>console.log("proceed to checkout")}/>

          <View style={{flex:1}}>
            <Text style={{fontSize: 18, alignSelf:'center'}}>
              Subtotal ({props.items} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold',}}>
              ₹ {props.subTotal}
              </Text>
            </Text>
          </View>
        </View>
    )
}

export default SubTotal;

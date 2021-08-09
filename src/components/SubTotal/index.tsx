import React from 'react';
import {View, Text, ScrollView, FlatList, ToastAndroid} from 'react-native';
import ButtonComponent from '../ButtonComponent';
import Cart from '../Cart';

const SubTotal = ({data}) => {
  const showToast = () => {
    ToastAndroid.show('Items added to cart successfully', ToastAndroid.SHORT);
  };
  return (
    <View style={{flex: 1}}>
      <ButtonComponent data={data} onPress={showToast()} />

      <View style={{flex: 1}}>
        <Text style={{fontSize: 18, alignSelf: 'center'}}>
          Subtotal ({data.items} items):{' '}
          <Text style={{color: '#e47911', fontWeight: 'bold'}}>
            ₹ {data.subTotal}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SubTotal;

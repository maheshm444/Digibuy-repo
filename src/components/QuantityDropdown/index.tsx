import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const QuantityDropdown = ({countInStock, changeQuantity}) => {
    const [quantity, setQuantity] = useState(1)
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
    if(quantity>0){
      changeQuantity(quantity-1)
    }
  };

  const onPlus = () => {
    if(quantity<countInStock){
    setQuantity(quantity + 1);
    changeQuantity(quantity+1)
  }
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    backgroundColor: '#33BFB7',
    width: 100,
    borderRadius:10,
    borderColor:'#33BFB7'
  
  },
  button: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33BFB7',
    borderRadius:5
  },
  butonText: {
    fontSize: 18,
    color:'#fff',
    fontWeight:'bold'
  },
  quantity: {
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold'
  },
});

export default QuantityDropdown;
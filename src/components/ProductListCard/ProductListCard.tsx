import React from "react";
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { SCREENS } from '../../constants';


export default function ProductListCard(props) {
	console.log(props);
	const { mrp, title, navigation, navigateTo } = props;
return <Text onPress={() => {
	navigation.push(SCREENS.DYNAMIC_PAGE, {url: navigateTo});
}}>{title} {mrp}</Text>
}
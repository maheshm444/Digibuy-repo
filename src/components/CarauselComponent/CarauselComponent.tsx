import React from "react";
import { Text, View, Image } from 'react-native';


export default function CaraouselComponent(props) {
	const { url, height, width } = props;
	console.log(url, height, width);

	return <View style={{height, width, borderWidth: 1, borderColor: 'red'}}>
		<Text>Carausel Component</Text>
	</View>
}
import React from "react";
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { SCREENS } from '../../constants';

// interface Category {
// 	image: ImageValue,
// 	text: TextValue
// }

// interface CategoriesProps {
// 	categories: Category[]
// }
//Remove any
export default function ImageComponent(props) {
	const { url, height, width, navigation, navigateTo } = props;

	return <TouchableWithoutFeedback onPress={() => {
		navigation.push(SCREENS.DYNAMIC_PAGE, {url: navigateTo});
	}}>
		<View style={{height, width, borderWidth: 1, borderColor: 'yellow'}}>
			<Text>Image Component</Text>
		</View>
	</TouchableWithoutFeedback>
}
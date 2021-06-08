import React from "react";
import { Text, View } from 'react-native';
import { ImageValue, TextValue } from '../../constants';

interface Category {
	image: ImageValue,
	text: TextValue
}

interface CategoriesProps {
	categories: Category[]
}
//Remove any
export default function CategoriesComponent(props: CategoriesProps) {
	const { categories, navigation } = props;

	return <View>
		{categories && categories.map(category => <Text onPress={() => navigation.push('LOGIN')}>{category.text.value}</Text>)}
	</View>
}
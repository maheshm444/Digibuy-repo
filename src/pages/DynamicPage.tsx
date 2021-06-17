import React from "react";
import { View, ScrollView } from 'react-native';
import { getComponent } from '../components/ComponentResolver';
import NavBar from '../components/NavBar/NavBar';
import { fetchData } from '../util';

interface DynamicPageProps {
	url: string,
	navigation: any //remove any
}

export default function DynamicPage(props) {
	const { navigation } = props;
	const url = props?.route?.params?.url;
	console.log(url);
	const { components, pageData: { title } } = fetchData(url);

	navigation.setOptions({ headerTitle: title });

	return (
		<View style={{ flex: 1 }}>
			<NavBar />
			<ScrollView>
				{
					components.map((component) => {
						const Component = getComponent(component.type);
						return <Component {...component.data} navigation={navigation}/>
					})
				}
			</ScrollView>
		</View>
	)
}
import React from "react";
import { View, ScrollView } from 'react-native';
import { getComponent } from '../components/ComponentResolver';
import { ComponentType } from '../constants';
import NavBar from '../components/NavBar/NavBar';
import { fetchData } from '../util';

interface DynamicPageProps {
	url: string,
	navigation: any //remove any
}

export default function DynamicPage(props: DynamicPageProps) {
	const { navigation } = props;
	
	const url = props?.route?.params?.url;
	const { components, pageData: { title } } = fetchData(url);

	navigation.setOptions({ headerTitle: title });

	return (
		<View style={{ flex: 1 }}>
			<NavBar />
			<ScrollView>
				{
					components.map((component: ComponentType) => {
						const Component = getComponent(component.type);
						return <Component {...component.data} navigation={navigation}/>
					})
				}
			</ScrollView>
		</View>
	)
}
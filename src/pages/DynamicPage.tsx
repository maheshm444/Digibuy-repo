import React from "react";
import { View } from 'react-native';
import homepageresponse from '../mocks/home.json';
import { getComponent } from '../components/ComponentResolver';
import { ComponentType } from '../constants';
import NavBar from '../components/NavBar/NavBar';

interface DynamicPageProps {
	url: string,
	navigation: any //remove any
}

export default function DynamicPage(props: DynamicPageProps) {
	const { navigation } = props;
	navigation.setOptions({ headerTitle: 'My page' });

	const { components } = homepageresponse;

	return (
		<View style={{ flex: 1 }}>
			<NavBar />
			{
				components.map((component: ComponentType) => {
					const Component = getComponent(component.type);
					return <Component {...component.data} navigation={navigation}/>
				})
			}
		</View>
	)
}
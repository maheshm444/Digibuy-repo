import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DynamicPage from './pages/DynamicPage';
import Login from './pages/Login';
import { SCREENS, getUrlFromScreen } from './constants';


export default function AppNavigation() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={SCREENS.DYNAMIC_PAGE}>
				<Stack.Screen name={SCREENS.DYNAMIC_PAGE} component={DynamicPage} initialParams={{ url: '/' }}/>
				<Stack.Screen name={SCREENS.LOGIN} component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
	
}
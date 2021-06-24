import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DynamicPage from './pages/DynamicPage';
import Login from './pages/Login/Login';
import { SCREENS, getUrlFromScreen } from './constants';
import theme from './design-system/theme'
import { Image } from 'react-native';
import images from './design-system/images'

function LogoTitle() {
	return (
	  <Image
		style={{ width: theme.dimensions.d74, height: theme.dimensions.d34 }}
		source={{uri: images.logo2}}
	  />
	);
  }

export default function AppNavigation() {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
        screenOptions={{
		  headerStyle: {
			  borderColor: theme.colors.greyLight,
			  borderWidth: 1
		  },
		  headerTitle: LogoTitle
        }}
        initialRouteName={SCREENS.LOGIN}>
				<Stack.Screen name={SCREENS.DYNAMIC_PAGE} component={DynamicPage} initialParams={{url: getUrlFromScreen(SCREENS.HOME)}}/>
				<Stack.Screen name={SCREENS.LOGIN} component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
	
}
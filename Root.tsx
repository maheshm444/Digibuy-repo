import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

interface ScreenParams {
  route?: {
    params: {
      id?: number;
      pageName?: string;
    };
  };
  navigation?: string;
}

function Screen({route, navigation}: ScreenParams) {
  // console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.push('Screen_3')} />
    </View>
  );
}

const Login = () => {
  return <Text>Login</Text>;
};

const Search = () => {
  return <Text>Search</Text>;
};

const Signup = () => {
  return <Text>Search</Text>;
};

const DynamicPage = (props) => {
  // const components = fetch(props.url);
  const components = [
    {
      type: 'IMAGE',
      value: {
        url: 'http://imageUrl',
        height: 20,
        width: 30,
      },
      navigateTo: '/categories',
    },
    {
      type: 'BANNER',
      value: {
        url: 'http://imageUrl',
        height: 20,
        width: 30,
      },
      navigateTo: '/categories',
    },
  ];
  console.log('props', props);
//   return (
//     <View style={{flex: 1, backgroundColor: 'red', height: 200, width: 200}}>
//       <Text>Dynamic Page</Text>
//     </View>
//   );

  return components.map(component => {
    if (component.type === 'IMAGE') {
	  return  <Button
        title="Done"
        onPress={() => {
		  // Pass and merge params back to home screen
          props.navigation.push('DynamicPage', {url: '/categories'});
        }}
      />
      // return <ImageComponent {...component} />;
    }
  });
};


// const ImageComponent = props => {
//   return (
//     <Image
//       onPress={() =>
//         props.navigateTo &&
        // props.navigation.navigate('DynamicPage', {url: props.navigateTo})
//       }
//       source={{uri: props.url}}
//       style={{height: props.height, width: props.width}}
//     />;
//   );
// };

{/* <DyanmicPage url='/'/>

<DyanmicPage url='/categorues'/> */}


// class DynamicPage extends React.Component {
// 	components = [
// 		{
// 		  type: 'IMAGE',
// 		  value: {
// 			url: 'http://imageUrl',
// 			height: 20,
// 			width: 30,
// 		  },
// 		  navigateTo: '/categories',
// 		},
// 		{
// 		  type: 'BANNER',
// 		  value: {
// 			url: 'http://imageUrl',
// 			height: 20,
// 			width: 30,
// 		  },
// 		  navigateTo: '/categories',
// 		},
// 	];

// 	render() {
// 		return this.components.map(component => {
// 			if (component.type === 'IMAGE') {
// 			  return  <Button
// 				title="Done"
// 				onPress={() => {
// 				  // Pass and merge params back to home screen
// 				  this.props.navigation.push('DynamicPage', {url: '/categories'});
// 				}}
// 			  />
// 			  // return <ImageComponent {...component} />;
// 			}
// 		  });
// 	}
// }
 
const Stack = createStackNavigator();
  
const RootNavigation = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="DynamicPage">
			<Stack.Screen name="DynamicPage" component={DynamicPage} initialParams={{url: '/'}}/>
			<Stack.Screen key="login" name="Login" component={Login} />
			<Stack.Screen key="signup" name="SignUp" component={Signup} />
			</Stack.Navigator>
	   </NavigationContainer>
	)
}

function App() {
	return (
	  <RootNavigation />
	);
}

export default App;

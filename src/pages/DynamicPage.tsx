import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {getComponent} from '../components/ComponentResolver';
import NavBar from '../components/NavBar/NavBar';
import {fetchData} from '../util';
import LottieView from 'lottie-react-native';

import Logo from '../components/Logo';
import colors from '../../assets/colors';
// interface DynamicPageProps {
// 	url: string,
// 	navigation: any //remove any
// }

export default function DynamicPage(props) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, [loading]);
  const {navigation} = props;
  const url = props?.route?.params?.url;
  const {
    components,
    pageData: {title, showLogo},
  } = fetchData(url);
  navigation.setOptions({
    headerTitle: () =>
      showLogo ? (
        <Logo title={title} showLogo={showLogo} />
      ) : (
        <Text style={{color: '#72cdc8', fontSize: 21, fontWeight: 'bold'}}>
          {title}
        </Text>
      ),
  });

  return (
    <View style={{flex: 1}}>
      {loading && (
        <LottieView
          source={require('../../assets/loader.json')}
          autoPlay
          loop
          style={styles.loading}
          resizeMode="cover"
        />
      )}
      {!loading && (
        <>
          {/* <NavBar /> */}
          <ScrollView>
            {components.map((component, index) => {
              const Component = getComponent(component.type);
              return (
                <Component
                  key={index}
                  data={component.data}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  loading: {
    width: 150,
    alignSelf: 'center',
    marginTop: 100,
  },
});

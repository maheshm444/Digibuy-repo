
import {StyleSheet} from 'react-native';
import theme from '../../design-system/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.dimensions.d16,
    flex: 1,
    justifyContent: 'center',
  },
  signInButton: {
    height: theme.dimensions.d60,
    marginTop: theme.dimensions.d60,
  },
  logoStyle: {
    width: theme.dimensions.d240,
    height: theme.dimensions.d115,
    alignSelf: 'center',
  },
});
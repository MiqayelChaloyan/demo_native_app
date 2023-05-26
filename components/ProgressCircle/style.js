import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    bottom: horizontalScale(70),
    right: horizontalScale(60),
  },
  procent: {
    fontSize: moderateScale(24),
    textAlign: 'center',
    color: theme.colors.green,
    // TODO: This part needs to be updated.
    ...theme.textVariants.Medium,
  },
  spent: {
    fontSize: moderateScale(10),
    textAlign: 'center',
    color: theme.colors.lightGray,
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
});

export default styles;

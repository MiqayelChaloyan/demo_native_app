import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: horizontalScale(70),
    right: horizontalScale(60),
  },
  percent: {
    fontSize: moderateScale(24),
    textAlign: 'center',
    color: theme.colors.primary_green,
    ...theme.textVariants.Medium,
  },
  spent: {
    fontSize: moderateScale(10),
    textAlign: 'center',
    color: theme.colors.cool_gray,
    ...theme.textVariants.Regular,
  },
});

export default styles;

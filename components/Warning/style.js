import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  warning: {
    width: '100%',
    marginTop: verticalScale(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    fontSize: moderateScale(14),
    ...theme.textVariants.Regular,
    color: theme.colors.dark_gray,
    textAlign: 'center',
  },
});

export default styles;

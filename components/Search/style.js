import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(15),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(14),
    backgroundColor: theme.colors.light_gray,
    fontSize: moderateScale(16),
    ...theme.textVariants.Medium,
  },
});

export default styles;

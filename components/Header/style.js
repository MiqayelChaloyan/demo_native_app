import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    marginTop: verticalScale(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: moderateScale(30),
    textAlign: 'center',
    color: theme.colors.black,
    lineHeight: moderateScale(36.31),
    maxWidth: horizontalScale(260),
    ...theme.textVariants.SemiBold,
  },
  headerButtonText: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(19.36),
    ...theme.textVariants.Medium,
  },
});

export default styles;

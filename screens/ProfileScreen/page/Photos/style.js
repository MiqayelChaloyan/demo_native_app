import {StyleSheet} from 'react-native';
import {theme} from '../../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(1),
    backgroundColor: theme.colors.primary_white,
  },
  itemImage: {
    width: horizontalScale(335),
    height: verticalScale(240),
    borderRadius: moderateScale(8),
  },
  itemTitle: {
    fontSize: moderateScale(15),
    color: theme.colors.black,
    marginTop: verticalScale(2),
    ...theme.textVariants.SemiBold,
  },
});

export default styles;

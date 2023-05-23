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
  },
  itemImage: {
    width: horizontalScale(335),
    height: verticalScale(240),
    borderRadius: moderateScale(8),
  },
  itemTitle: {
    fontSize: moderateScale(15),
    color: theme.colors.foreground,
    fontWeight: 600,
    marginTop: verticalScale(2),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

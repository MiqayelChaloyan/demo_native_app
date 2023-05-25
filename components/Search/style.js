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
    marginTop: verticalScale(32),
  },
  input: {
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(15),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(15),
    backgroundColor: theme.colors.darkGray,
    fontSize: moderateScale(16),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Medium,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';
import {theme} from '../../../../assets/theme/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: verticalScale(150),
    width: horizontalScale(343),
    paddingTop: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(10),
  },
  questionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  text_1: {
    fontSize: moderateScale(17),
    textAlign: 'center',
    color: theme.colors.light_blue,
    ...theme.textVariants.Regular,
  },
  text_2: {
    fontSize: moderateScale(17),
    textAlign: 'center',
    color: theme.colors.light_blue,
    ...theme.textVariants.Regular,
  },
  text_3: {
    fontSize: moderateScale(17),
    textAlign: 'center',
    color: theme.colors.light_blue,
    ...theme.textVariants.Regular,
  },
  button_1: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: horizontalScale(150),
  },
  button_2: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: verticalScale(10),
    width: horizontalScale(160),
  },
  cancel: {
    position: 'absolute',
    right: verticalScale(10),
    top: verticalScale(2),
  },
});

export default styles;

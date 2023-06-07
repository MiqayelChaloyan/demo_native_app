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
    height: horizontalScale(170),
    width: horizontalScale(343),
    paddingTop: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(10),
  },
  questionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 250,
  },
  button_2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: 200,
  },
  cancel: {
    position: 'absolute',
    right: verticalScale(10),
    top: verticalScale(2),
  },
});

export default styles;

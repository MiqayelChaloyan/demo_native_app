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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  question: {
    textAlign: 'center',
    color: theme.colors.black,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(15),
    fontSize: moderateScale(17),
    ...theme.textVariants.Regular,
  },
  button_1: {
    backgroundColor: theme.colors.primary_green,
    padding: verticalScale(5),
    width: horizontalScale(70),
    height: verticalScale(40),
    borderRadius: verticalScale(10),
  },
  text_1: {
    color: theme.colors.primary_white,
    textAlign: 'center',
    fontSize: moderateScale(16),
    ...theme.textVariants.Regular,
  },
  button_2: {
    padding: verticalScale(5),
    width: horizontalScale(70),
    height: verticalScale(40),
    borderRadius: verticalScale(10),
  },
  text_2: {
    color: theme.colors.primary_green,
    textAlign: 'center',
    fontSize: moderateScale(16),
    ...theme.textVariants.Regular,
  },
});

export default styles;

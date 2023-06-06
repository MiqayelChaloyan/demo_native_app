import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: horizontalScale(150),
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
    fontSize: moderateScale(22),
    textAlign: 'center',
    color: theme.colors.black,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    ...theme.textVariants.Medium,
  },
  button_1: {
    backgroundColor: theme.colors.primary_green,
    padding: verticalScale(10),
    width: horizontalScale(100),
    borderRadius: verticalScale(10),
  },
  text_1: {
    color: theme.colors.primary_white,
    textAlign: 'center',
    ...theme.textVariants.Regular,
  },
  button_2: {
    backgroundColor: theme.colors.gray,
    padding: verticalScale(10),
    width: horizontalScale(100),
    borderRadius: verticalScale(10),
  },
  text_2: {
    color: theme.colors.black,
    textAlign: 'center',
    ...theme.textVariants.Regular,
  },
});

export default styles;

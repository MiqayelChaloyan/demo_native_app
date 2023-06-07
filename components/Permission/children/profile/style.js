import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';
import {theme} from '../../../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: verticalScale(180),
    width: horizontalScale(343),
    paddingTop: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(10),
  },
  question: {
    fontSize: 17,
    textAlign: 'center',
    color: theme.colors.black,
    marginTop: verticalScale(35),
    ...theme.textVariants.Regular,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(40),
  },
  answer: {
    fontSize: moderateScale(17),
    textAlign: 'center',
    color: theme.colors.light_blue,
    marginTop: verticalScale(15),
    margin: verticalScale(50),
    ...theme.textVariants.Regular,
  },
  cancel: {
    position: 'absolute',
    right: verticalScale(10),
    top: verticalScale(2),
  },
});

export default styles;

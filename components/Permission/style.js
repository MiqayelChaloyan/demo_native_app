import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    height: horizontalScale(180),
    width: horizontalScale(320),
    paddingTop: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
  },
  question: {
    fontSize: 17,
    textAlign: 'center',
    color: 'black',
    marginTop: verticalScale(35),
    ...theme.textVariants.Regular,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(25),
    paddingHorizontal: horizontalScale(40),
  },
  answer: {
    fontSize: moderateScale(17),
    textAlign: 'center',
    color: '#59d4b7',
    marginTop: verticalScale(15),
    margin: verticalScale(50),
    ...theme.textVariants.Regular,
  },
});

export default styles;

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
    height: horizontalScale(457),
    width: horizontalScale(343),
    paddingTop: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(10),
  },
  apperaciative: {
    marginTop: verticalScale(32),
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: horizontalScale(200),
    marginHorizontal: verticalScale(80),
  },
  title: {
    fontSize: moderateScale(30),
    textAlign: 'center',
    fontWeight: 600,
    color: theme.colors.black,
    marginTop: verticalScale(32),
    ...theme.textVariants.SemiBold,
  },
  content: {
    width: horizontalScale(320),
    fontSize: moderateScale(16),
    marginHorizontal: verticalScale(16),
    fontWeight: 500,
    color: theme.colors.dark_gray,
    textAlign: 'center',
    marginTop: verticalScale(16),
    ...theme.textVariants.Medium,
  },
  button: {
    marginTop: verticalScale(45),
    width: horizontalScale(311),
    height: verticalScale(51),
    backgroundColor: theme.colors.primary_green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(100),
    marginHorizontal: verticalScale(16),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: theme.colors.primary_white,
    ...theme.textVariants.SemiBold,
  },
  text: {
    textAlign: 'center',
    color: theme.colors.primary_green,
    fontSize: moderateScale(14),
    marginTop: verticalScale(16),
    fontWeight: 600,
    ...theme.textVariants.SemiBold,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  optionsContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
    paddingHorizontal: horizontalScale(16),
  },
  starsContainer: {
    width: '100%',
    marginBottom: horizontalScale(240),
  },
  button: {
    width: horizontalScale(311),
    height: verticalScale(51),
    backgroundColor: theme.colors.primary_green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(100),
    marginHorizontal: verticalScale(16),
    marginBottom: verticalScale(16),
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: horizontalScale(5),
  },
  optionsText: {
    color: theme.colors.cool_gray,
    fontSize: moderateScale(16),
    ...theme.textVariants.Medium,
  },
  container: {
    marginTop: verticalScale(47),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: theme.colors.primary_white,
    ...theme.textVariants.SemiBold,
  },
  radioBoxContainer: {
    height: horizontalScale(18),
    width: horizontalScale(18),
    borderRadius: verticalScale(12),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: horizontalScale(12),
    width: horizontalScale(12),
    borderRadius: verticalScale(100),
    backgroundColor: theme.colors.primary_green,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.cool_gray,
    margin: verticalScale(9.2),
  },
});

export default styles;

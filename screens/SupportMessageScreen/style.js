import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  supportScreenContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  supportScreen: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  inputContainer: {
    marginTop: verticalScale(47),
    maxWidth: horizontalScale(343),
  },
  input: {
    maxWidth: horizontalScale(343),
    fontSize: moderateScale(16),
    lineHeight: verticalScale(25),
    color: theme.colors.foreground,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    paddingHorizontal: horizontalScale(16),
  },
  button: {
    backgroundColor: theme.colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16,
    borderRadius: verticalScale(100),
  },
  buttonText: {
    paddingVertical: verticalScale(16),
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: theme.colors.primary,
    // TODO: This part needs to be updated.
    ...theme.textVariants.SemiBold,
  },
});

export default styles;

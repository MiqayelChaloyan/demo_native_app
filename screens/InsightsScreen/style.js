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
    backgroundColor: theme.colors.primary_white,
  },
  insights: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  headerTextContainer: {
    marginBottom: verticalScale(32),
  },
  headerText: {
    fontSize: moderateScale(24),
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  progressCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: verticalScale(32),
  },
});

export default styles;

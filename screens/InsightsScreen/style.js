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
  itemListContainer: {
    flex: 1,
    width: '100%',
    marginBottom: verticalScale(90),
  },
  progressCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(32),
  },
});

export default styles;

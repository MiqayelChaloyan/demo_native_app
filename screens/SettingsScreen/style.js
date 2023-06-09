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
  settingsScreen: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  settingsList: {
    marginTop: moderateScale(32),
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: verticalScale(0.3),
    borderColor: theme.colors.cool_gray,
    marginBottom: verticalScale(16),
    paddingVertical: verticalScale(8),
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: horizontalScale(20),
  },
  title: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(19),
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
});

export default styles;

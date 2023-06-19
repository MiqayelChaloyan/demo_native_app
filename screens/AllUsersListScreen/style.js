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
  },
  header: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: horizontalScale(80),
    alignItems: 'stretch',
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(15),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(14),
    backgroundColor: theme.colors.light_gray,
    fontSize: moderateScale(16),
    ...theme.textVariants.Medium,
  },
  messages: {
    top: verticalScale(11),
    left: horizontalScale(15),
  },
  userImage: {
    width: horizontalScale(38),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
    top: verticalScale(5),
    right: horizontalScale(15),
    borderWidth: horizontalScale(0.5),
    borderColor: theme.colors.primary_green,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(15),
    marginBottom: verticalScale(20),
  },
  '1col': {
    flex: 2,
  },
});

export default styles;

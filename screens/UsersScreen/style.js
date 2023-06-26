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
    marginVertical: verticalScale(20),
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 80,
    alignItems: 'stretch',
  },
  messages: {
    top: verticalScale(10),
    left: horizontalScale(15),
  },
  userImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
    top: verticalScale(4),
    right: horizontalScale(15),
    borderWidth: moderateScale(0.5),
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

import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  warning: {
    width: '100%',
    marginTop: verticalScale(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: verticalScale(40),
  },
  warningText: {
    fontSize: moderateScale(18),
    color: theme.colors.dark_gray,
    textAlign: 'center',
    padding: verticalScale(50),
    ...theme.textVariants.Regular,
  },
  image: {
    width: horizontalScale(200),
    height: verticalScale(170),
  },
  warningTextContent: {
    fontSize: moderateScale(15),
    color: theme.colors.dark_gray,
    textAlign: 'center',
    padding: verticalScale(50),
    ...theme.textVariants.Regular,
  }
});

export default styles;

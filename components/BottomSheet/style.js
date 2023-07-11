import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.light_grey,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    padding: verticalScale(16),
    height: verticalScale(300),
    borderTopLeftRadius: horizontalScale(25),
    borderTopRightRadius: horizontalScale(25),
  },
});

export default styles;

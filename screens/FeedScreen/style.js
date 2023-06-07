import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {horizontalScale} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  feedScreenContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  feedScreen: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;

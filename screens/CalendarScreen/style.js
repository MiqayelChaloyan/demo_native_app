import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  content: {
    flex: 1,
    marginTop: -verticalScale(26),
  },
  calendarOverlay: {
    position: 'absolute',
    top: verticalScale(-80),
    width: '100%',
  },
  headerPart: {
    height: verticalScale(180),
    backgroundColor: theme.colors.primary_green,
  },
  listContainer: {
    flex: 1,
    position: 'absolute',
    top: verticalScale(360),
    width: '100%',
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(300),
  },
});

export default styles;

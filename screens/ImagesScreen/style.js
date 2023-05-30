import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  images: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },

  row: {
    flexDirection: 'row',
  },
  app: {
    flex: 4,
    marginHorizontal: 'auto',
    width: 345,
    marginTop: 50,
  },
  '1col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 1,
  },
  '2col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 2,
  },
  '3col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 3,
  },
  '4col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 4,
  },
  image: {
    width: '100%',
    height: 128,
  },
});

export default styles;

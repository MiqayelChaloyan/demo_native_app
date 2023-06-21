import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  '1col': {
    borderColor: theme.colors.primary_white,
    borderWidth: 5,
    flex: 1,
  },
  '2col': {
    borderColor: theme.colors.primary_white,
    borderWidth: 5,
    flex: 2,
  },
  '3col': {
    borderColor: theme.colors.primary_white,
    borderWidth: 5,
    flex: 3,
  },
  '4col': {
    borderColor: theme.colors.primary_white,
    borderWidth: 5,
    flex: 4,
  },
});

export default styles;
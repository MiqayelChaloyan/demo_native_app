import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: theme.colors.foreground,
    lineHeight: 36.31,
    maxWidth: 94,
    maxHeight: 36,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 19.36,
    maxWidth: 64,
    maxHeight: 19,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

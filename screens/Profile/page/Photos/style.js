import {StyleSheet} from 'react-native';
import {theme} from '../../../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
  },
  itemImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
  itemTitle: {
    fontSize: 15,
    color: theme.colors.foreground,
    fontWeight: 600,
    marginTop: 2,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

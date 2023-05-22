import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contentBlock: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    backgroundColor: theme.colors.darkGray,
  },
  postImage: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    borderRadius: 8,
  },
  contentInfo: {
    width: windowWidth * 0.74,
    height: windowHeight * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
    flexDirection: 'column',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  aboutContentDate: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.lightGray,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  feedTextContainer: {
    paddingRight: 24,
  },
  feedText: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

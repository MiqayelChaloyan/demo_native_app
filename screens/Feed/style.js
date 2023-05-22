import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  feedScreenContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    marginTop: 32,
  },
  searchInput: {
    height: windowWidth * 0.133,
    minHeight: 40,
    maxHeight: 60,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 100,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    backgroundColor: theme.colors.darkGray,
    fontSize: 16,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  contentsBlockContainer: {
    width: '100%',
    height: windowHeight * 0.5,
    minHeight: 320,
    maxHeight: 445,
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    maxHeight: 60,
    maxWidth: 60,
  },
  feedItemImage: {
    height: windowWidth * 0.133,
    maxHeight: 60,
    borderRadius: 8,
  },
  contentInfo: {
    width: windowWidth * 0.74,
    height: windowHeight * 0.1,
    minWidth: 250,
    maxWidth: 304,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerFeedText: {
    fontSize: 16,
    fontWeight: 600,
    color: theme.colors.foreground,
    lineHeight: 19,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  aboutContentDate: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.lightGray,
    lineHeight: 17,
    paddingTop: 2,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  feedTextContainer: {
    paddingRight: 8,
  },
  feedText: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.foreground,
    lineHeight: 17,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  skeleton: {
    marginTop: 25,
  },
});

export default styles;

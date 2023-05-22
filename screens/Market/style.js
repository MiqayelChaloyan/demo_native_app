import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  market: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  marketScreenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentInfo: {
    width: windowWidth * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  searchContainer: {
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.05,
    marginHorizontal: windowWidth * 0.05,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 100,
    padding: 10,
    backgroundColor: theme.colors.darkGray,
  },
  hotDealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: windowWidth * 0.3,
    height: windowHeight * 0.04,
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  hotDealsText: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.colors.foreground,
    width: 320,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: windowWidth * 0.05,
  },
  itemImageContainer: {
    width: windowWidth * 0.29,
    height: windowWidth * 0.29,
    backgroundColor: theme.colors.darkGray,
    borderRadius: 8,
    marginRight: windowWidth * 0.035,
  },
  itemNameContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.045,
    marginVertical: windowHeight * 0.01,
  },
  itemNameText: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  itemPriceContainer: {
    width: windowWidth * 0.128,
  },
  itemPriceText: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

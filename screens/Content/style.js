import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  swiperItem: {
    width: windowWidth * 0.9,
    marginTop: 16,
  },
  paginationStyle: {
    paddingLeft: windowWidth * 0.78,
    marginBottom: 0,
    bottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: 8,
    aspectRatio: 1,
  },
  dotStyle: {
    backgroundColor: theme.colors.gray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: theme.colors.green,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  titleStyle: {
    width: windowWidth * 0.9,
    height: 19,
    marginTop: 8,
    fontSize: 16,
    color: theme.colors.foreground,
    fontWeight: 600,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  postMessage: {
    width: windowWidth * 0.9,
    height: 34,
    fontSize: 14,
    color: theme.colors.foreground,
    fontWeight: 400,
    marginVertical: 8,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  dateStyle: {
    width: windowWidth * 0.3,
    height: 17,
    fontSize: 14,
    color: theme.colors.lightGray,
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  contentItem: {
    width: windowWidth,
    height: windowHeight * 0.49,
    backgroundColor: theme.colors.transparent,
  },
  headerTextContainer: {
    width: windowWidth * 0.9,
    height: 29,
    marginBottom: 11,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  itemListContainer: {
    flex: 1,
    width: windowWidth * 0.9,
    marginBottom: 30,
  },
  contentItemOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
    borderBottomWidth: 1,
  },
  circle: {
    borderRadius: 8,
    width: 16,
    height: 16,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 16,
  },
  warning: {
    width: '100%',
    marginTop: verticalScale(10),
  },
  warningText: {
    fontSize: moderateScale(14),
    fontWeight: 300,
    color: theme.colors.mediumLightGray,
    textAlign: 'center',
  },
});

export default styles;

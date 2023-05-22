import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  feedScreenContainer: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    marginTop: verticalScale(32),
  },
  searchInput: {
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: '#E8E8E8',
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(16),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(15),
    backgroundColor: '#F6F6F6',
    fontSize: moderateScale(16),
  },
  contentsBlockContainer: {
    width: '100%',
    height: verticalScale(356),
    marginTop: verticalScale(16),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  feedItemImage: {
    height: verticalScale(50),
    borderRadius: moderateScale(8),
  },
  contentInfo: {
    width: horizontalScale(269),
    height: verticalScale(77),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#E8E8E8',
    marginBottom: verticalScale(16),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  headerFeedText: {
    fontSize: moderateScale(16),
    fontWeight: 600,
    color: 'black',
    lineHeight: verticalScale(19),
  },
  aboutContentDate: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    color: '#BDBDBD',
    lineHeight: verticalScale(17),
    paddingTop: verticalScale(2),
  },
  feedTextContainer: {
    paddingRight: horizontalScale(8),
  },
  feedText: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    color: 'black',
    lineHeight: verticalScale(17),
  },
  skeleton: {
    marginTop: verticalScale(25),
  },
});

export default styles;

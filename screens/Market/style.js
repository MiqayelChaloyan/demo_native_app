import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  market: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerPartContainer: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginLeft: horizontalScale(16),
  },
  searchContainer: {
    width: '100%',
    marginTop: verticalScale(32),
  },
  searchInput: {
    borderWidth: moderateScale(1),
    borderColor: '#E8E8E8',
    height: verticalScale(50),
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(16),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(15),
    backgroundColor: '#F6F6F6',
    fontSize: moderateScale(16),
  },
  hotDealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: verticalScale(29),
    marginTop: verticalScale(32),
    marginBottom: verticalScale(16),
  },
  playButton: {
    paddingRight: horizontalScale(16),
  },
  hotDealsText: {
    fontSize: moderateScale(24),
    fontWeight: 500,
    color: 'black',
    maxWidth: horizontalScale(250),
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemImageContainer: {
    width: horizontalScale(110),
    height: horizontalScale(110),
    backgroundColor: '#F6F6F6',
    borderRadius: moderateScale(8),
    marginRight: horizontalScale(16),
  },
  itemNameContainer: {
    width: horizontalScale(110),
    height: verticalScale(34),
    marginVertical: verticalScale(8),
  },
  itemNameText: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    color: 'black',
  },
  itemPriceContainer: {
    maxWidth: horizontalScale(110),
  },
  itemPriceText: {
    fontSize: moderateScale(14),
    fontWeight: 600,
    color: 'black',
  },
});

export default styles;

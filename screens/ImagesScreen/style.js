import {StyleSheet, Dimensions} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  images: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  app: {
    flex: 4,
    marginHorizontal: 'auto',
    width: horizontalScale(345),
    marginTop: verticalScale(50),
  },

  image: {
    width: '100%',
    height: verticalScale(200),
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
  },
  imageBlock : {
    paddingHorizontal: horizontalScale(5),
    marginBottom: horizontalScale(10),
    width: horizontalScale(windowWidth / 2),
  },
  checkBox: {
    position: 'absolute',
    right: horizontalScale(1),
    bottom: horizontalScale(1),
    backgroundColor: theme.colors.primary_green,
    borderRadius: moderateScale(50),
    padding: verticalScale(1),
  },
  check: {
    position: 'absolute',
    borderRadius: moderateScale(50),
    backgroundColor: theme.colors.transparent,
    borderWidth: 2,
    borderColor: theme.colors.primary_green,
    width: horizontalScale(28),
    height: verticalScale(28),
    right: horizontalScale(6),
    bottom: horizontalScale(5),
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(200),
  },
  empty: {
    width: horizontalScale(120),
    height: verticalScale(120),
  },
  modalText: {
    fontSize: moderateScale(18),
    color: theme.colors.black,
    left: horizontalScale(7),
  },
  sheetContainer: {
    backgroundColor: '#E8E8E8',
    height: verticalScale(90),
    justifyContent: 'flex-start',
    paddingVertical: verticalScale(15),
  },
  command: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    position: 'absolute',
    width: horizontalScale(30),
    height: verticalScale(30),
    right: horizontalScale(7),
    bottom: verticalScale(5),
  },
  checkedBox: {
    position: 'absolute',
    backgroundColor: theme.colors.primary_green,
    width: horizontalScale(24),
    height: verticalScale(25),
    borderRadius: moderateScale(50),
    padding: horizontalScale(2),
  },
  imageContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(5),
  }
});

export default styles;

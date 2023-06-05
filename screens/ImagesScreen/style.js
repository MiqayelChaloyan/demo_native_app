import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  images: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  row: {
    flexDirection: 'row',
  },
  app: {
    flex: 4,
    marginHorizontal: 'auto',
    width: horizontalScale(345),
    marginTop: 50,
  },
  '1col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 1,
  },
  '2col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 2,
  },
  '3col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 3,
  },
  '4col': {
    borderColor: '#FAFAFA',
    borderWidth: 5,
    flex: 4,
  },
  image: {
    width: '100%',
    height: horizontalScale(150),
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
    height: horizontalScale(28),
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
    height: horizontalScale(120),
  },
  modalText: {
    fontSize: moderateScale(18),
    color: theme.colors.black,
    left: horizontalScale(7),
  },
  sheetContainer: {
    backgroundColor: '#E8E8E8',
    height: horizontalScale(90),
    justifyContent: 'flex-start',
    paddingVertical: verticalScale(15),
  },
  command: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
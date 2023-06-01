import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/metrics/Metrics';
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
    width: 345,
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
    height: 150,
  },
  checkBox: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    backgroundColor: theme.colors.primary_green,
    borderRadius: 50,
    padding: 2,
  },
  check: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: theme.colors.transparent,
    borderWidth: 2,
    borderColor: theme.colors.primary_green,
    width: 30,
    height: 30,
    right: 10,
    bottom: 10,
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 200,
  },
  empty: {
    width: 120,
    height: 120,
  },
  modalText: {
    fontSize: 18,
    color: 'black',
    left: 7,
  },
  sheetContainer: {
    backgroundColor: '#E8E8E8',
    height: 100,
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  command: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

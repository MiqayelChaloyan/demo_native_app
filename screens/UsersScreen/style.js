import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  //index.js
  root: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 80,
    alignItems: 'stretch',
  },
  input: {
    width: '100%',
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(15),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(14),
    backgroundColor: theme.colors.light_gray,
    fontSize: moderateScale(16),
  },
  messages: {
    top: 10,
    left: 15,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    top: 4,
    right: 15,
    borderWidth: 0.5,
    borderColor: theme.colors.primary_green,
  },

  //RenderImagePairs.jsx
  row: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 20,
  },
  '1col': {
    flex: 2,
  },
  //
});

export default styles;

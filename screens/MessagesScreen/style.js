import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    marginBottom: verticalScale(20),
    paddingHorizontal: verticalScale(16),
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(50),
    paddingEnd: horizontalScale(55),
    borderWidth: moderateScale(0.5),
    borderColor: theme.colors.cool_gray,
    padding: verticalScale(10),
    borderRadius: moderateScale(50),
    backgroundColor: theme.colors.gray,
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(7),
    fontSize: moderateScale(15),
    ...theme.textVariants.Regular,
  },
  newMessage: {
    position: 'relative',
    width: '100%',
    bottom: verticalScale(10),
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBox: {
    position: 'absolute',
    right: verticalScale(24),
    bottom: verticalScale(7),
  },
  send: {
    width: horizontalScale(36),
    height: verticalScale(37),
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginVertical: horizontalScale(5),
  },
  messageView: {
    backgroundColor: theme.colors.transparent,
    maxWidth: horizontalScale(235),
  },
  messageContainerIsRight: {
    backgroundColor: theme.colors.primary_green,
    maxWidth: horizontalScale(250),
    alignSelf: 'flex-end',
    borderRadius: moderateScale(8),
    right: verticalScale(19),
  },
  messageIsRight: {
    color: theme.colors.primary_white,
  },
  messageIsLeft: {
    color: theme.colors.black,
  },
  message: {
    alignSelf: 'flex-start',
    fontSize: moderateScale(14),
    padding: verticalScale(16),
    ...theme.textVariants.Regular,
  },
  messageContainerIsLeft: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gray,
    maxWidth: horizontalScale(250),
    borderRadius: moderateScale(8),
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(10),
    left: verticalScale(20),
  },
  arrow: {
    position: 'absolute',
    width: horizontalScale(20),
    height: verticalScale(30),
    bottom: 0,
    zIndex: -1,
  },
  leftArrow: {
    left: 19,
    bottom: 20,
    zIndex: -1,
    borderTopWidth: 30 / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: 50 / 2.0,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: theme.colors.gray,
  },
  rightArrow: {
    bottom: 25,
    right: 18,
    zIndex: -1,
    borderTopWidth: 40 / 2.0,
    borderRightWidth: 0,
    borderBottomWidth: 40 / 2.0,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: theme.colors.primary_green,
    transform: [{rotate: '180deg'}],
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: verticalScale(15),
    marginBottom: verticalScale(15),
    alignItems: 'flex-start',
  },
  userImageProfile: {
    width: horizontalScale(46),
    height: verticalScale(50),
    borderRadius: moderateScale(100),
  },
  activeChat: {
    borderWidth: moderateScale(3),
    borderColor: theme.colors.primary_green,
    width: horizontalScale(12),
    height: verticalScale(12),
    backgroundColor: theme.colors.primary_white,
    borderRadius: moderateScale(50),
    position: 'absolute',
    bottom: verticalScale(1),
    left: verticalScale(37),
  },
  userFullName: {
    fontSize: moderateScale(15),
    left: verticalScale(5),
    color: theme.colors.black,
    top: verticalScale(5),
    ...theme.textVariants.Medium,
  },
});

export default styles;

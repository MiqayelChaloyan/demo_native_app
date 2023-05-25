import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets//metrics/Metrics';

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
    borderWidth: 0.5,
    borderColor: theme.colors.lightGray,
    padding: verticalScale(10),
    borderRadius: 50,
    backgroundColor: theme.colors.gray,
    paddingHorizontal: verticalScale(15),
    paddingVertical: 7,
    fontSize: 15,
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
  messegesList: {
    height: verticalScale(500),
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
  messageContainerisRight: {
    backgroundColor: theme.colors.green,
    maxWidth: horizontalScale(250),
    alignSelf: 'flex-end',
    borderRadius: moderateScale(8),
    right: verticalScale(19),
  },
  messageisRight: {
    color: theme.colors.primary,
  },
  messageIsLeft: {
    color: theme.colors.foreground,
  },
  message: {
    alignSelf: 'flex-start',
    fontSize: moderateScale(14),
    padding: verticalScale(16),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
  messageContainerisLeft: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gray,
    borderBottomLeftRadius: 0,
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
    // backgroundColor: theme.colors.gray,
    // borderBottomRightRadius: moderateScale(25),
    // left: verticalScale(20),
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
    // backgroundColor: theme.colors.green,
    // borderBottomLeftRadius: moderateScale(25),
    // right: verticalScale(19),
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
    borderLeftColor: theme.colors.green,
    transform: [{rotate: '180deg'}],
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: verticalScale(15),
    alignItems: 'flex-start',
  },
  userImageProfile: {
    width: horizontalScale(47),
    height: verticalScale(50),
    borderRadius: moderateScale(100),
  },
  activeChat: {
    borderWidth: moderateScale(3),
    borderColor: theme.colors.green,
    width: horizontalScale(12),
    height: verticalScale(12),
    backgroundColor: theme.colors.background,
    borderRadius: moderateScale(50),
    position: 'absolute',
    bottom: verticalScale(1),
    left: verticalScale(37),
  },
  userFullName: {
    fontSize: moderateScale(15),
    left: verticalScale(5),
    color: theme.colors.foreground,
    top: verticalScale(5),
    fontWeight: 600,
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
});

export default styles;

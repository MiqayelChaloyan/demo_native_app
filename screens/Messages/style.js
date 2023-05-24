import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme/theme';
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
    height: verticalScale(51),
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    padding: verticalScale(10),
    borderRadius: 50,
    backgroundColor: theme.colors.gray,
    paddingHorizontal: verticalScale(15),
    paddingVertical: 7,
    fontSize: 15,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
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
    right: verticalScale(30),
    bottom: verticalScale(9),
  },
  send: {
    width: horizontalScale(34),
    height: verticalScale(34),
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: horizontalScale(16),
    marginVertical: horizontalScale(5),
  },
  messageView: {
    backgroundColor: theme.colors.transparent,
    maxWidth: horizontalScale(235),
    padding: verticalScale(10),
  },
  messageContainerisRight: {
    backgroundColor: theme.colors.green,
    maxWidth: horizontalScale(250),
    alignSelf: 'flex-end',
    borderRadius: moderateScale(15),
    paddingHorizontal: horizontalScale(10),
    paddingTop: verticalScale(5),
    paddingBottom: verticalScale(10),
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
    fontSize: moderateScale(15),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  messageContainerisLeft: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gray,
    borderBottomLeftRadius: 0,
    maxWidth: horizontalScale(250),
    borderRadius: moderateScale(15),
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
    backgroundColor: theme.colors.gray,
    borderBottomRightRadius: moderateScale(25),
    left: verticalScale(20),
  },
  rightArrow: {
    backgroundColor: theme.colors.green,
    borderBottomLeftRadius: moderateScale(25),
    right: verticalScale(19),
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: verticalScale(15),
    alignItems: 'flex-start',
  },
  userImageProfile: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: 50,
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
    left: verticalScale(40),
  },
  userFullName: {
    fontSize: moderateScale(15),
    left: verticalScale(5),
    color: theme.colors.foreground,
    top: verticalScale(5),
    fontWeight: 600,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

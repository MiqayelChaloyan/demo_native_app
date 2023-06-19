import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  listUsersRoot: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  root: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: verticalScale(16),
  },
  listUsers: {
    marginTop: verticalScale(5),
    marginBottom: verticalScale(180),
  },
  navigate: {
    textAlign: 'left',
    top: verticalScale(27),
    fontSize: moderateScale(16),
    lineHeight: verticalScale(19.36),
    left: verticalScale(20),
    color: theme.colors.primary_green,
    ...theme.textVariants.Medium,
  },
  userRoot: {
    margin: verticalScale(2),
    padding: verticalScale(5),
    paddingHorizontal: verticalScale(16),
  },
  user: {
    flexDirection: 'row',
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(54),
    borderRadius: verticalScale(100),
  },
  userName: {
    fontSize: moderateScale(15),
    left: verticalScale(17),
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  activeChat: {
    borderWidth: moderateScale(3),
    borderColor: theme.colors.primary_green,
    width: horizontalScale(12),
    height: verticalScale(12),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(50),
    position: 'absolute',
    bottom: verticalScale(1),
    left: verticalScale(40),
  },
  messages: {
    left: verticalScale(71),
    bottom: verticalScale(15),
    flexDirection: 'row',
  },
  messagesText: {
    fontSize: moderateScale(14),
    bottom: verticalScale(12),
    ...theme.textVariants.Regular,
  },
  skeleton: {
    padding: verticalScale(5),
    paddingHorizontal: verticalScale(16),
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: theme.colors.primary_white,
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: horizontalScale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReset: {
    width: horizontalScale(70),
    height: verticalScale(72),
  },
  buttonText: {
    opacity: 0.7,
    width: horizontalScale(40),
    height: verticalScale(50),
    textAlign: 'center',
    paddingTop: verticalScale(10),
    color: theme.colors.black,
    bottom: verticalScale(-12),
    left: verticalScale(328),
    position: 'relative',
  },
  swipeable: {
    height: verticalScale(75),
    marginVertical: verticalScale(10),
    backgroundColor: theme.colors.primary_white,
    justifyContent: 'center',
    paddingLeft: horizontalScale(10),
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: verticalScale(3.84),
    elevation: 1,
  },
});

export default styles;

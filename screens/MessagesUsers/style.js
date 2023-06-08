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
    width: horizontalScale(54),
    height: horizontalScale(54),
    borderRadius: verticalScale(100),
  },
  userName: {
    fontSize: moderateScale(15),
    left: verticalScale(12),
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  activeChat: {
    borderWidth: moderateScale(3),
    borderColor: theme.colors.primary_green,
    width: horizontalScale(12),
    height: horizontalScale(12),
    backgroundColor: theme.colors.primary_white,
    borderRadius: verticalScale(50),
    position: 'absolute',
    bottom: 1,
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
    margin: verticalScale(2),
    marginTop: verticalScale(5),
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
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    opacity: 0.7,
    width: 40,
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    color: theme.colors.black,
    bottom: 0,
    left: 15,
  },
  swipeable: {
    height: 75,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  itemSeparator: {
    height: 1,
    width: 340,
    marginHorizontal: 16,
    backgroundColor: theme.colors.black,
  },
});

export default styles;

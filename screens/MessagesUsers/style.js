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
    marginBottom: verticalScale(250),
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
    resizeMode: 'center'
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
  line: {
    borderWidth: moderateScale(0.4),
    width: horizontalScale(290),
    height: horizontalScale(1),
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
    left: verticalScale(60),
    bottom: verticalScale(15),
  },
  skeleton: {
    margin: verticalScale(2),
    marginTop: verticalScale(5),
    padding: verticalScale(5),
    paddingHorizontal: verticalScale(16),
  },
  warning: {
    width: '100%',
    marginTop: verticalScale(120),
  },
  warningText: {
    fontSize: moderateScale(14),
    ...theme.textVariants.Regular,
    color: theme.colors.dark_gray,
    textAlign: 'center',
  },
});

export default styles;

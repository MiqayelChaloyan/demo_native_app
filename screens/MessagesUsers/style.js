import { StyleSheet } from 'react-native';
import { theme } from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
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
  userRoot: {
    margin: verticalScale(2),
    padding: verticalScale(5),
    paddingHorizontal: verticalScale(16),
  },
  user: {
    flexDirection: 'row',
  },
  profileImage: {
    width: horizontalScale(55),
    height: horizontalScale(55),
    borderRadius: verticalScale(50),
  },
  userName: {
    fontSize: moderateScale(15),
    fontWeight: 600,
    left: verticalScale(12),
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  activeChat: {
    borderWidth: 3,
    borderColor: theme.colors.green,
    width: horizontalScale(12),
    height: horizontalScale(12),
    backgroundColor: theme.colors.primary,
    borderRadius: verticalScale(50),
    position: 'absolute',
    bottom: 1,
    left: verticalScale(40),
  },
  messages: {
    left: verticalScale(72),
    bottom: verticalScale(15),
    flexDirection: 'row',
  },
  messagesText: {
    fontSize: moderateScale(14),
    bottom: verticalScale(12),
  },
  line: {
    borderWidth: 0.4,
    width: horizontalScale(290),
    height: horizontalScale(1),
    justifyContent: 'center',
    backgroundColor: theme.colors.foreground,
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
    fontWeight: 300,
    color: theme.colors.mediumLightGray,
    textAlign: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.light_gray,
  },
  header: {
    // marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: horizontalScale(80),
    alignItems: 'center',
  },
  // input: {
  //   width: '100%',
  //   height: verticalScale(50),
  //   borderWidth: moderateScale(1),
  //   borderColor: theme.colors.gray,
  //   borderRadius: moderateScale(100),
  //   paddingTop: verticalScale(15),
  //   paddingLeft: horizontalScale(16),
  //   paddingBottom: verticalScale(14),
  //   backgroundColor: theme.colors.light_gray,
  //   fontSize: moderateScale(16),
  //   ...theme.textVariants.Medium,
  // },
  messages: {
    top: verticalScale(15),
    left: horizontalScale(15),
  },
  userImage: {
    width: horizontalScale(38),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
    top: verticalScale(16),
    right: horizontalScale(15),
    borderWidth: horizontalScale(0.5),
    borderColor: theme.colors.primary_green,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userOptions: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: verticalScale(1),
    borderColor: theme.colors.primary_green,
    width: horizontalScale(160),
    height: verticalScale(240),
    borderRadius: moderateScale(20),
  },
  imageContain: {
    position: 'absolute',
  },
  contactBackground: {
    width: horizontalScale(157),
    height: verticalScale(60),
    resizeMode: 'cover',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  userImageContainer: {
    borderRadius: moderateScale(50),
    marginVertical: verticalScale(20),
  },
  userImageProfile: {
    width: horizontalScale(74),
    height: verticalScale(80),
    borderRadius: moderateScale(50),
  },
  userFullName: {
    fontSize: moderateScale(16),
    color: theme.colors.black,
    opacity: 0.5,
    ...theme.textVariants.Medium,
  },
  contacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    opacity: 0.5,
  },
  contactsInormationText: {
    fontSize: moderateScale(10),
    color: theme.colors.black,
    left: verticalScale(5),
    ...theme.textVariants.Medium,
  },
  messagesButton: {
    borderWidth: verticalScale(1),
    borderColor: theme.colors.primary_green,
    padding: verticalScale(10),
    borderRadius: moderateScale(20),
    width: horizontalScale(140),
    textAlign: 'center',
    marginVertical: verticalScale(15),
    color: theme.colors.primary_green,
  },
});

export default styles;

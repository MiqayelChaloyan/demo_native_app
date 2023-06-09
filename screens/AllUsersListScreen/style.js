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
    backgroundColor: theme.colors.primary_white,
    paddingHorizontal: horizontalScale(16),
  },
  header: {
    marginVertical: verticalScale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchContainer: {
    marginHorizontal: horizontalScale(16),
    flex: 1,
  },
  messages: {
    top: verticalScale(10),
    marginBottom: verticalScale(20),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(0.5),
    borderColor: theme.colors.primary_green,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userOptions: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: verticalScale(1),
    borderColor: theme.colors.primary_green,
    width: horizontalScale(150),
    height: verticalScale(240),
    borderRadius: moderateScale(20),
    marginRight: horizontalScale(40),
  },
  imageContain: {
    position: 'absolute',
  },
  contactBackground: {
    width: horizontalScale(147),
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
  contactsInformationText: {
    fontSize: moderateScale(10),
    color: theme.colors.black,
    marginLeft: horizontalScale(5),
    ...theme.textVariants.Medium,
  },
  messagesButton: {
    borderWidth: verticalScale(1),
    borderColor: theme.colors.primary_green,
    padding: verticalScale(10),
    borderRadius: moderateScale(20),
    width: horizontalScale(140),
    marginVertical: verticalScale(15),
  },
  pairsContainer: {
    marginBottom: verticalScale(110),
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  col: {
    paddingTop: verticalScale(10),
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.primary_green,
  },
});

export default styles;

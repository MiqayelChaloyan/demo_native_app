import {StyleSheet} from 'react-native';
import { theme } from "../../assets/theme/theme";import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  headerContainer: {
    width:'100%',
    marginTop: verticalScale(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: moderateScale(30),
    fontWeight: 600,
    textAlign: 'center',
    color: theme.colors.foreground,
    lineHeight: moderateScale(36.31),
    maxWidth: horizontalScale(260),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  headerButtonText: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    lineHeight: moderateScale(19.36),
    maxWidth: horizontalScale(64),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;

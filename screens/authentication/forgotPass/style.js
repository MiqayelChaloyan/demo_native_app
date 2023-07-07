import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../../assets/metrics/Metrics';
import {theme} from '../../../assets/theme/theme';

const styles = StyleSheet.create({
    root: {
        backgroundColor: theme.colors.primary_white,
        flex: 1,
    },
    image: {
        width: horizontalScale(180),
        height: verticalScale(170),
        marginTop: verticalScale(50),
    },
    centered: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    option: {
        fontSize: moderateScale(30),
        color: theme.colors.black,
        textAlign: 'center',
        lineHeight: verticalScale(36.31),
        marginTop: verticalScale(30),
        marginBottom: verticalScale(30),
        ...theme.textVariants.SemiBold,
    },
    container: {
        padding: verticalScale(20),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(0),
    },
    subtitle: {
        width: horizontalScale(330),
        fontSize: moderateScale(15),
        marginBottom: verticalScale(20),
        color: theme.colors.cool_gray,
        ...theme.textVariants.Regular,
    },
    button: {
        width: horizontalScale(340),
        height: verticalScale(51),
        backgroundColor: theme.colors.primary_green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(100),
        marginBottom: verticalScale(20),
    },
    buttonText: {
        textAlign: 'center',
        fontSize: moderateScale(16),
        color: theme.colors.primary_white,
        ...theme.textVariants.SemiBold,
        lineHeight: verticalScale(19.36),
    },
    buttonTextBack: {
        textAlign: 'center',
        fontSize: moderateScale(16),
        color: theme.colors.black,
        lineHeight: verticalScale(19.36),
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: theme.colors.black,
        opacity: 0.5,
        marginBottom: verticalScale(20),
        ...theme.textVariants.SemiBold,
    },
});

export default styles;
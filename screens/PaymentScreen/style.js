import {StyleSheet} from 'react-native';
import {
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary_white,
    },
    form: {
        marginBottom: verticalScale(20),
        marginHorizontal: horizontalScale(16),
        marginTop: verticalScale(50),
    },
    label: {
        textAlign: 'left',
        fontSize: moderateScale(12),
        paddingVertical: verticalScale(7),
        color: theme.colors.black,
        ...theme.textVariants.Medium,
    },
    expiresDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    separation: {
        fontSize: moderateScale(35),
        paddingVertical: verticalScale(10),
        color: theme.colors.dark_gray,
        ...theme.textVariants.Regular,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: moderateScale(16),
        color: theme.colors.primary_white,
        lineHeight: verticalScale(19.36),
        ...theme.textVariants.SemiBold,
    },
    button: {
        width: horizontalScale(340),
        height: verticalScale(51),
        backgroundColor: theme.colors.primary_green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: verticalScale(100),
        marginBottom: verticalScale(20),
        marginHorizontal: horizontalScale(16),
    },
});

export default styles;

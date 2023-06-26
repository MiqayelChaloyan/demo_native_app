import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';


const styles = StyleSheet.create({
    input: {
        width: horizontalScale(343),
        height: verticalScale(51),
        borderWidth: 1,
        marginBottom: verticalScale(10),
        borderColor: theme.colors.gray,
        padding: verticalScale(16),
        borderRadius: moderateScale(8),
        backgroundColor: theme.colors.light_gray,
        paddingVertical: verticalScale(7),
        fontSize: moderateScale(15),
        paddingEnd: horizontalScale(70),
        ...theme.textVariants.Medium,
    },
    inputError: {
        textAlign: 'center',
        color: theme.colors.danger,
        fontSize: moderateScale(11),
        marginTop: verticalScale(5),
        marginBottom: verticalScale(10),
        ...theme.textVariants.Regular,
    },
});

export default styles;
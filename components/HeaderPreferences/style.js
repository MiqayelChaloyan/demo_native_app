import {StyleSheet} from 'react-native';
import {
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
    headerTextCancel: {
        width: horizontalScale(70),
        textAlign: 'center',
        fontSize: moderateScale(20),
        paddingVertical: verticalScale(20),
        color: theme.colors.black,
        ...theme.textVariants.Medium,
    },
    headerText: {
        width: horizontalScale(230),
        textAlign: 'center',
        fontSize: moderateScale(25),
        paddingVertical: verticalScale(20),
        color: theme.colors.black,
        ...theme.textVariants.Medium,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default styles;

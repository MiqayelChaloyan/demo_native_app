import { StyleSheet } from 'react-native';
import {
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../assets/metrics/Metrics';
import { theme } from '../../assets/theme/theme';

const styles = StyleSheet.create({
    container: {
        width: horizontalScale(342),
        height: verticalScale(51),
        backgroundColor: theme.colors.light_gray,
        borderRadius: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: horizontalScale(40),
        alignItems: 'stretch',
        paddingVertical: verticalScale(15),
    },
    value: {
        fontSize: moderateScale(13),
        color: theme.colors.black,
        textAlign: 'left',
        ...theme.textVariants.Medium,
    },
    checkedRemove: {
        position: 'absolute',
        width: horizontalScale(20),
        height: verticalScale(21),
        borderRadius: moderateScale(50),
        padding: horizontalScale(2),
    },
    removeCard: {
        width: horizontalScale(40),
        height: verticalScale(40),
        borderRadius: moderateScale(10),
        fontSize:  moderateScale(10),
        ...theme.textVariants.Medium,
    },
    checkedBox: {
        position: 'absolute',
        backgroundColor: theme.colors.primary_green,
        width: horizontalScale(20),
        height: verticalScale(21),
        borderRadius: moderateScale(50),
        padding: horizontalScale(2),
    },
});

export default styles;

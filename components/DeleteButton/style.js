import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from "../../assets/metrics/Metrics";
import { theme } from "../../assets/theme/theme";

const styles = StyleSheet.create({
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
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: verticalScale(10),
    },
    closeButtonText: {
        fontSize: moderateScale(10),
        color: theme.colors.black,
        backgroundColor: theme.colors.light_gray,
        padding: verticalScale(8),
        borderRadius: verticalScale(50),
        width: horizontalScale(30),
        height: verticalScale(30),
    },
});

export default styles;
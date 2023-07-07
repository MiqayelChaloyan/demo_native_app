import {StyleSheet} from 'react-native';
import {
    horizontalScale,
    moderateScale,
    verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.colors.light_grey,
        justifyContent: 'flex-end',
    },
    sheet: {
        backgroundColor: 'white',
        padding: verticalScale(16),
        height:  verticalScale(300),
        borderTopLeftRadius: horizontalScale(25),
        borderTopRightRadius: horizontalScale(25),
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
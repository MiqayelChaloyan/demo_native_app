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
    block: {
        marginHorizontal: horizontalScale(16),
    },
    openModal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: verticalScale(10),
        marginTop: verticalScale(199)
    },
    textOpenModal: {
        width: horizontalScale(340),
        height: verticalScale(51),
        backgroundColor: theme.colors.light_gray,
        borderRadius: verticalScale(10),
        fontSize: moderateScale(17),
        color: theme.colors.black,
        paddingHorizontal: horizontalScale(40),
        paddingVertical: verticalScale(14),
    },
    saveSetting: {
        marginTop: verticalScale(20),
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
        lineHeight: verticalScale(19.36),
        ...theme.textVariants.SemiBold,
    },
    headerText: {
        textAlign: 'center',
        fontSize: moderateScale(25),
        paddingVertical: verticalScale(20),
        color: theme.colors.black,
        ...theme.textVariants.Medium,
    },
    contain: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: horizontalScale(200),
        alignItems: 'center',
        borderRadius: verticalScale(100),
        bottom: verticalScale(10),
        marginTop: verticalScale(20),
    },
    buttonAdd: {
        color: theme.colors.black,
        fontSize: moderateScale(19),
        left: horizontalScale(20),
        ...theme.textVariants.Regular,
    },
    paymentText: {
        width: horizontalScale(200),
        bottom: verticalScale(40),
        color: theme.colors.black,
        fontSize: moderateScale(17),
        ...theme.textVariants.Regular,
    },
    cardType: {
        width: horizontalScale(40),
        height: verticalScale(32),
        position: 'absolute',
        left: horizontalScale(10),
        bottom: verticalScale(9),
        zIndex: 1,
        resizeMode: 'center'
    },
    addNewCard: {
        color: theme.colors.black,
        fontSize: moderateScale(17),
        marginTop: verticalScale(10),
        ...theme.textVariants.Regular,
    },
    label: {
        textAlign: 'left',
        fontSize: moderateScale(12),
        paddingVertical: verticalScale(7),
        color: theme.colors.black,
        ...theme.textVariants.Medium,
    },
    card: {
        marginVertical: verticalScale(5),
        borderRadius: verticalScale(11),
        borderColor: theme.colors.primary_green
    },
    maximumCards: {
        textAlign: 'center',
        fontSize: moderateScale(14),
        paddingVertical: verticalScale(2),
        color: theme.colors.primary_green,
        ...theme.textVariants.Medium,
    }
});

export default styles;

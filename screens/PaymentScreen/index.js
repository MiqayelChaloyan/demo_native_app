import PropTypes from 'prop-types';
import React, {useCallback, useContext, useMemo} from 'react';
import {Text, View, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {GlobalDataContext} from '../../contexts/context';
import {useFormik} from 'formik';
import {creditCardValidationSchema} from './validation/CardValidationForm';
import {theme} from '../../assets/theme/theme';
import {horizontalScale, moderateScale, verticalScale} from '../../assets/metrics/Metrics';
import CustomTextInput from '../../components/CustomInput/CustomTextInput';
import HeaderPreferences from '../../components/HeaderPreferences';
import styles from './style';

const small = {
    width: horizontalScale(150),
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
};

const PaymentScreen = ({navigation}) => {
    const {creditCardData, setCreditCardData} = useContext(GlobalDataContext);

    const handleSubmit = useCallback(
        async (data) => {
            setCreditCardData([...creditCardData, {id: creditCardData.length + 1, isActive: false, ...data}]);
            return navigation.navigate('AccountSettings');
        },
        []
    );

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            month: '',
            day: '',
            ccv: ''
        },
        validationSchema: creditCardValidationSchema,
        onSubmit: handleSubmit,
    });

    const { handleChange, errors, setFieldTouched, touched, isValid } = formik;

    const renderInputField = (name, placeholder, keyboardType, autoCapitalize, autoCorrect, style = null) => {
        return (
            <View>
                <Text style={styles.label}>{placeholder}</Text>
                <CustomTextInput
                    name={name}
                    placeholder={placeholder}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={false}
                    errors={errors[name]}
                    touched={touched[name]}
                    style={style}
                />
            </View>
        );
    };

    const saveButtonDisabled = useMemo(() => !isValid, [isValid]);

    return (
        <ScrollView style={styles.container}>
             <StatusBar backgroundColor={theme.colors.primary_white} barStyle="dark-content" />
            <HeaderPreferences  navigation={navigation} screen={'AccountSettings'} option={'Add New Card'}/>
            <View style={styles.form}>
                {renderInputField('name', 'Name', 'default', 'none', false)}
                {renderInputField('number', 'Number', 'default', 'none', false)}
                <View>
                    <Text style={styles.label}>EXPIRATION DATE</Text>
                    <View style={styles.expiresDate}>
                        {renderInputField('month', 'Month', 'default', 'none', false, small)}
                        <Text style={styles.separation}>/</Text>
                        {renderInputField('day', 'Day', 'default', 'none', false, small)}
                    </View>
                </View>
                <View>
                    {renderInputField('ccv', 'CVV / CVC', 'default', 'none', false)}
                </View>
            </View>
            <TouchableOpacity
                disabled={saveButtonDisabled}
                onPress={formik.handleSubmit}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

PaymentScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default React.memo(PaymentScreen);



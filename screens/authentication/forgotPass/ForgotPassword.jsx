import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {forgotPassValidationSchema} from './forgotPassValidation';
import {Formik, useFormik} from 'formik';
import CustomTextInput from '../../../components/CustomInput/CustomTextInput';
import styles from './style';

const ForgotPassword = ({navigation}) => {
    const {
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: forgotPassValidationSchema,
        onSubmit: async data => {
            // TODO: This part is for a test and will be changed lately.
            return navigation.navigate('SignIn');
        }
    });

    return (
        <ScrollView style={styles.root}>
            <View style={styles.centered}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/images/ForgotPassword.png')}
                />
                <Text style={styles.option}>
                    Forgot Password
                </Text>
                <Formik>
                    <View style={styles.container}>
                        <CustomTextInput
                            name="email"
                            placeholder="Email or Username"
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={false}
                            errors={errors.email}
                            touched={touched.email}
                        />
                        <Text style={styles.subtitle}>
                            Reset link will be sent to the email address you used during registration.
                        </Text>
                    </View>
                </Formik>
                <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Send  Link</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonTextBack}>Back to Sign In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

ForgotPassword.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default React.memo(ForgotPassword);
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {forgotPassValidationSchema} from './forgotPassValidation';
import {Formik, useFormik} from 'formik';
import styles from './style';

const ForgotPassword = ({ navigation }) => {
    const {
        values,
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
                    source={require('../../../assets/images/forgotpassword-image.png')}
                />
                <Text style={styles.option}>
                    Forgot Password
                </Text>
                <Formik>
                    <View style={styles.container}>
                        <TextInput
                            name="email"
                            placeholder="Email or Username"
                            placeholderTextColor={theme.colors.cool_gray}
                            style={styles.input}
                            variant="standard"
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            value={values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={false}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.inputError}>{errors.email}</Text>
                        )}
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
    navigation: PropTypes.object,
};


export default ForgotPassword;
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Formik, useFormik } from 'formik';
import { loginValidationSchema } from './loginValidationSchema';
import CancelIcon from '../../../assets/icons/Cancel.svg';
import { theme } from '../../../assets/theme/theme';
import styles from './style';

const LogInScreen = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

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
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: data => {
      // Here we get the user already registered trial
    },
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginRoot}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.root}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.cancel}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <CancelIcon width={20} height={20} fill={theme.colors.lightGray} />
                </TouchableOpacity>
              </View>
              <View style={styles.headerBox}>
                <Text style={styles.logIn}>Log In</Text>
              </View>
            </View>
          </View>
          <Formik>
            <View style={styles.inputsContainer}>
              <View style={styles.emailInputStyle}>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  placeholderTextColor={theme.colors.lightGray}
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
              </View>
              <View style={styles.passworddBox}>
                <View style={styles.passwordInputStyle}>
                  <TextInput
                    name="password"
                    secureTextEntry={hidePassword}
                    placeholder="Password"
                    placeholderTextColor={theme.colors.lightGray}
                    style={styles.input}
                    variant="standard"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    keyboardType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.inputError}>{errors.password}</Text>
                  )}
                </View>
                <View style={styles.passHide}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={() => setHidePassword(!hidePassword)}>
                    <Text style={styles.hidePassword}>
                      {hidePassword ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Formik>
          <View
            style={[styles.loginFooter, { bottom: keyboardStatus ? '13.5%' : 0 }]}>
            <View style={styles.button}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forgotPass}>
              <TouchableOpacity>
                <Text style={styles.forgotPassText}>Forgot your password?</Text>
              </TouchableOpacity>
              <View style={styles.navigateSignUp}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.forgotPassText}>Create acount</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

LogInScreen.propTypes = {
  navigation: PropTypes.object,
};

export default LogInScreen;

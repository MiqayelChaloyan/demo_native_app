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
  Platform,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { Formik, useFormik } from 'formik';
import { signUpValidationSchema } from './signUpValidationSchema';
import CancelIcon from '../../../assets/icons/Cancel.svg';
import { theme } from '../../../assets/theme/theme';
import styles from './style';

const SignUpScreen = ({ navigation }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    values.isChecked = isChecked;
  }, [isChecked]);

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
      name: '',
      email: '',
      password: '',
      isChecked,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: data => {
      // Here we get the data of filled user fields
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
      style={styles.signUpRoot}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.cancel}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                  <CancelIcon
                    width={16}
                    height={16}
                    fill={theme.colors.lightGray}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.headerBox}>
                <Text style={styles.signUp}>Sign Up</Text>
              </View>
              <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Formik>
            <View style={styles.inputsContainer}>
              <View style={styles.nameInputStyle}>
                <TextInput
                  name="name"
                  placeholder="Name"
                  placeholderTextColor={theme.colors.lightGray}
                  style={styles.input}
                  variant="standard"
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  value={values.name}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={false}
                />
                {touched.name && errors.name && (
                  <Text style={styles.inputError}>{errors.name}</Text>
                )}
              </View>
              <View style={styles.emailInputStyle}>
                <TextInput
                  name="email"
                  placeholder="Email"
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
              <View style={styles.passwordBox}>
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
              <View
                style={[
                  styles.checkBoxStyle,
                  { bottom: keyboardStatus ? '1%' : 0 },
                ]}>
                <CheckBox
                  style={styles.checkBox}
                  isChecked={isChecked}
                  checkedCheckBoxColor={theme.colors.green}
                  checkBoxColor={theme.colors.gray}
                  uncheckedCheckBoxColor={theme.colors.gray}
                  onClick={() => setIsChecked(!isChecked)}
                  rightTextView={
                    <Text style={styles.checkBoxText}>
                      I would like to receive your newsletter and other
                      promotional information.
                    </Text>
                  }
                />
              </View>
            </View>
          </Formik>
          <View
            style={[styles.signUpFooter, { bottom: keyboardStatus ? '8.5%' : 0 }]}>
            <View style={styles.button}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;

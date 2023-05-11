import React, {useState} from 'react';
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
import {Formik, useFormik} from 'formik';
import {loginValidationSchema} from './loginValidationSchema';
import styles from './style';

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(false);

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
      console.log(data);
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.root}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.loginContainer}>
                <Text style={styles.login}>Log In</Text>
              </View>
            </View>
          </View>

          <Formik>
            <View style={styles.form}>
              <TextInput
                name="email"
                placeholder="Email Address"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                variant="standard"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                value={values.email}
                // keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.inputError}>{errors.email}</Text>
              )}
              <TextInput
                name="password"
                secureTextEntry={hidePassword}
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                variant="standard"
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.inputError}>{errors.password}</Text>
              )}
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.visibilityBtn}
                onPress={() => setHidePassword(!hidePassword)}>
                <Text style={styles.hidePassword}>
                  {hidePassword ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>
          </Formik>

          <View style={{alignItems: 'center'}}>
            <View style={styles.button}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignItems: 'center', top: '30%'}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  color: '#5DB075',
                }}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
// import in icons
import CancelIcon from '../../../assets/icons/Cancel.svg';
import styles from './style';

const SignUpScreen = () => {
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
              <View style={styles.cancel}>
                <CancelIcon width={20} height={20} fill="#BDBDBD" />
              </View>
              <View style={{height: 50}}>
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
                  placeholderTextColor="#BDBDBD"
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
              <View style={{marginBottom: '55%'}}>
                <View style={styles.passwordInputStyle}>
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
                    keyboardType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.inputError}>{errors.password}</Text>
                  )}
                </View>

                <View style={{position: 'relative'}}>
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

          <View style={{alignItems: 'center'}}>
            <View style={styles.button}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: '2%'}}>
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
            <View style={{alignItems: 'center', marginTop: '2%'}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#5DB075',
                  }}>
                  If you haven't registered yet, click here
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

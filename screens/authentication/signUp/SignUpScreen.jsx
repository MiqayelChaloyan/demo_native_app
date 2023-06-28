import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import {Formik, useFormik} from 'formik';
import {signUpValidationSchema} from './signUpValidationSchema';
import CancelIcon from '../../../assets/icons/Cancel.svg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {theme} from '../../../assets/theme/theme';
import {GlobalDataContext} from '../../../contexts/context';
import {setDataStorage} from '../../../utils/AsyncStorageApiUtils';
import CustomTextInput from '../../../components/CustomInput/CustomTextInput';
import styles from './style';

const SignUpScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);
  const checkBoxText =
    'I would like to receive your newsletter and other promotional information.';
  const privacyPolicyText = 'Sipining up you accept the Privacy Policy.';
  const { setUserData, setLoggedIn } = useContext(GlobalDataContext);

  useEffect(() => {
    values.isChecked = isChecked;
  }, [isChecked, values]);

  useEffect(() => {
    values.isPrivacyPolicy = isPrivacyPolicy;
  }, [isPrivacyPolicy, values]);

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
      isPrivacyPolicy,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async data => {
      // TODO: This part is for a test and will be changed lately.
      if (data.email && data.password && data.name && data.isPrivacyPolicy) {
        setUserData(data);
        await setDataStorage('loggedIn', true);
        setLoggedIn(true);
        Alert.alert('Login successful');
      }
    },
  });

  const changeCheckboxBackgroundColor = checkbox =>
    checkbox ? theme.colors.primary_green : theme.colors.light_gray;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.signUpRoot}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <View style={styles.cancel}>
                  <CancelIcon
                    width={16}
                    height={16}
                    fill={theme.colors.cool_gray}
                  />
                </View>
                </TouchableOpacity>
              <View style={styles.headerBox}>
                <Text style={styles.signUp}>Sign Up</Text>
              </View>
              <View style={styles.headerBox}>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Formik>
            <View style={styles.inputsContainer}>
              <View style={styles.nameInputStyle}>
                <CustomTextInput
                  name="name"
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={false}
                  errors={errors.name}
                  touched={touched.name}
                />
              </View>
              <View style={styles.emailInputStyle}>
                <CustomTextInput
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={false}
                  errors={errors.email}
                  touched={touched.email}
                />
              </View>
              <View style={styles.passwordBox}>
                <View style={styles.passwordInputStyle}>
                  <CustomTextInput
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    keyboardType={null}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={hidePassword}
                    errors={errors.password}
                    touched={touched.password}
                  />
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
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={16}
              text={checkBoxText}
              isChecked={isChecked}
              iconStyle={[
                styles.iconStyle,
                { backgroundColor: changeCheckboxBackgroundColor(isChecked) },
              ]}
              innerIconStyle={styles.innerIconStyle}
              textStyle={styles.textStyle}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
          <View style={styles.checkBox}>
            <BouncyCheckbox
              size={16}
              text={privacyPolicyText}
              isChecked={isPrivacyPolicy}
              iconStyle={[
                styles.iconStyle,
                {
                  backgroundColor:
                    changeCheckboxBackgroundColor(isPrivacyPolicy),
                },
              ]}
              innerIconStyle={styles.innerIconStyle}
              textStyle={styles.textStylePolicy}
              onPress={() => setIsPrivacyPolicy(!isPrivacyPolicy)}
            />
            {touched.isPrivacyPolicy && errors.isPrivacyPolicy && (
              <Text style={styles.inputError}>{errors.isPrivacyPolicy}</Text>
            )}
          </View>
          <View style={styles.signUpFooter}>
            <TouchableOpacity
              disabled={!isValid}
              onPress={handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignUpScreen;

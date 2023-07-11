import {memo, useCallback, useContext, useEffect, useState} from 'react';
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
  BackHandler,
  ScrollView,
} from 'react-native';
import {Formik, useFormik} from 'formik';
import {signInValidationSchema} from './signInValidationSchema';
import {setDataStorage} from '../../../utils/AsyncStorageApiUtils';
import {GlobalDataContext} from '../../../contexts/context';
import CustomTextInput from '../../../components/CustomInput/CustomTextInput';
import styles from './style';

const SignInScreen = ({navigation}) => {
  const {userData, setLoggedIn, loggedIn} = useContext(GlobalDataContext);
  const [hidePassword, setHidePassword] = useState(true);
  const {handleChange, errors, handleBlur, touched, isValid, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: signInValidationSchema,
      onSubmit: async data => {
        // TODO: This part is for a test and will be changed lately.
        const {email, password} = userData;
        if (data.email === email && data.password === password) {
          await setDataStorage('loggedIn', true);
          setLoggedIn(true);
          Alert.alert('Login successful');
          return navigation.navigate('Profile');
        } else {
          Alert.alert('Login failed', 'Invalid email or password');
        }
      },
    });

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [handleBackButtonClick, loggedIn]);

  const handleBackButtonClick = () => {
    navigation.navigate('Feed');
    setLoggedIn(false);
    return true;
  };

  const handleTouchOnField = useCallback(
    field => {
      return () => {
        handleBlur(field);
      };
    },
    [handleBlur],
  );

  const togglePasswordVisibility = useCallback(() => {
    setHidePassword(!hidePassword);
  }, [hidePassword]);

  const navigateToSignUpScreen = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginRoot}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.headerBox}>
                <Text style={styles.logIn}>Log In</Text>
              </View>
            </View>
          </View>
          <Formik>
            <View style={styles.inputsContainer}>
              <View style={styles.emailInputStyle}>
                <CustomTextInput
                  name="email"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleTouchOnField('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={false}
                  errors={errors.email}
                  touched={touched.email}
                />
              </View>
              <View>
                <View style={styles.passwordInputStyle}>
                  <CustomTextInput
                    name="password"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleTouchOnField('password')}
                    keyboardType={null}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={hidePassword}
                    errors={errors.password}
                    touched={touched.password}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={togglePasswordVisibility}>
                    <Text style={styles.hidePassword}>
                      {hidePassword ? 'Show' : 'Hide'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Formik>
          <View style={styles.loginFooter}>
            <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.forgotPass}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassText}>Forgot your password?</Text>
              </TouchableOpacity>
              <View style={styles.navigateSignUp}>
                <TouchableOpacity onPress={navigateToSignUpScreen}>
                  <Text style={styles.forgotPassText}>Create account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(SignInScreen);

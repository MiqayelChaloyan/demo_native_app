import {useContext, useState} from 'react';
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
  Alert,
} from 'react-native';
import {Formik, useFormik} from 'formik';
import {loginValidationSchema} from './loginValidationSchema';
import {theme} from '../../../assets/theme/theme';
import {getDataStorage} from '../../../utils/AsyncStorageApiUtils';
import ArrowIcon from '../../../assets/icons/Arrow.svg';
import {GlobalDataContext} from '../../../contexts/context';
import styles from './style';

const LogInScreen = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const {setLoggedIn} = useContext(GlobalDataContext);
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
    onSubmit: async data => {
      // TODO: This part is for a test and will be changed lately.
      const {email, password} = await getDataStorage('user_created');
      if (data.email === email && data.password === password) {
        await getDataStorage('loggedIn', 'true');
        setLoggedIn(true);
        Alert.alert('Login successful');
        return navigation.navigate('Profile');
      } else {
        Alert.alert('Login failed', 'Invalid email or password');
      }
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.loginRoot}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                  <ArrowIcon
                    width={16}
                    height={16}
                    fill={theme.colors.cool_gray}
                  />
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
                  placeholder="Email"
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
              </View>
              <View>
                <View style={styles.passwordInputStyle}>
                  <TextInput
                    name="password"
                    secureTextEntry={hidePassword}
                    placeholder="Password"
                    placeholderTextColor={theme.colors.cool_gray}
                    style={styles.input}
                    variant="standard"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.inputError}>{errors.password}</Text>
                  )}
                </View>
                <View>
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
          <View style={styles.loginFooter}>
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
                  <Text style={styles.forgotPassText}>Create account</Text>
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

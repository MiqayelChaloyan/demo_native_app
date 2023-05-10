import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import {Formik, useFormik} from 'formik';
import {signUpValidationSchema} from './signUpValidationSchema';

const SignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

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
      // Keyboard.dismiss();
      console.log(data);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerNavigate}>
          <View style={styles.option_1}>
            <Text style={styles.close}>x</Text>
          </View>
          <View style={styles.option_2}>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
          <View style={styles.option_3}>
            <Text style={styles.login}>Login</Text>
          </View>
        </View>
      </View>

      <Formik>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
          }}>
          <TextInput
            name="name"
            placeholder="Name"
            style={styles.input}
            variant="standard"
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            value={values.name}
          />
          {touched.name && errors.name && (
            <Text style={styles.inputError}>{errors.name}</Text>
          )}
          <TextInput
            name="email"
            placeholder="Email Address"
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
            placeholder="Password"
            style={styles.input}
            variant="standard"
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            value={values.password}
            secureTextEntry={hidePassword}
          />
          {touched.password && errors.password && (
            <Text style={styles.inputError}>{errors.password}</Text>
          )}
          <CheckBox
            style={{
              padding: 15,
              justifyContent: 'flex-start',
              margin: 5,
            }}
            isChecked={isChecked}
            checkedCheckBoxColor="#E8E8E8"
            checkBoxColor="#E8E8E8"
            uncheckedCheckBoxColor="#E8E8E8"
            onClick={() => setIsChecked(!isChecked)}
            rightTextView={
              <Text
                style={{
                  fontSize: 15,
                  color: '#666666',
                  left: '15%',
                }}>
                I would like to receive your newsletter and other promotional
                information.
              </Text>
            }
            // rightTextStyle={{fontSize: 20, color: '#E8E8E8'}}
          />
        </View>
      </Formik>

      <View style={{alignItems: 'center'}}>
        <View style={styles.button}>
          <TouchableOpacity disabled={!isValid} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{alignItems: 'center', height: '100%'}}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: '#5DB075',
            }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '2%',
    marginTop: '14%',
  },
  headerNavigate: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginHorizontal: 20,
  },
  option_1: {
    // width: '40%',
    height: 50,
  },
  close: {
    fontSize: 25,
    color: '#BDBDBD',
  },
  option_2: {
    // width: '40%',
    height: 50,
  },
  signUp: {
    fontSize: 30,
    fontWeight: 600,
    color: '#000000',
    lineHeight: 36.31,
    textAlign: 'center',
  },
  option_3: {
    // width: '40%',
    height: 50,
  },
  login: {
    fontSize: 16,
    color: '#5DB075',
    lineHeight: 36.31,
    textAlign: 'right',
  },
  input: {
    width: '90%',
    height: '13%',
    // margin: 5,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  checkbox: {
    alignSelf: 'center',
  },
  loginContainer: {
    width: '80%',
    height: 400,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  inputError: {
    color: 'red',
    fontSize: 12,
  },
  button: {
    marginTop: '5%',
    width: '90%',
    height: '25%',
    backgroundColor: '#5DB075',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});

export default SignUpScreen;

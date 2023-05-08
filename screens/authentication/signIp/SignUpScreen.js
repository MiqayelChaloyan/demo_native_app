import {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignUpScreen = () => {
  const [text, onChangeText] = useState('');
  const [isSelected, setSelection] = useState(false);
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
      <View
        style={{
          flex: 2,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <View>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="Custom Checkbox"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
            // textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={isChecked => {}}
          />
          <Text style={styles.label}>Do you like React Native?</Text>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}} />
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
    // backgroundColor: 'pink',
    height: '15%',
    width: '100%',
  },
  headerNavigate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginHorizontal: 15,
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
    width: 343,
    height: 50,
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
});

export default SignUpScreen;

import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import Header from '../../components/Header/Header';
import Share from 'react-native-share';
import styles from './style';
import {useState} from 'react';

let delayDebounceFn = null;

const SupportMessageScreen = ({navigation}) => {
  const [text, setText] = useState();
  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }
    delayDebounceFn = setTimeout(() => {
      setText(inputText);
      delayDebounceFn = null;
    }, 1000);
  };

  const share = async () => {
    const options = {
      message: text,
      title: 'Testing the new app',
      email: 'cs-reply@amazon.com',
    };

    try {
      const result = await Share.open(options);
      if (result.action === Share.sharedAction) {
        Alert.alert('Share was successful');
      } else if (result.action === Share.dismissedAction) {
        Alert.alert('Share was dismissed');
      } else if (result.action === Share.failedAction) {
        Alert.alert('Share failed');
      }
    } catch (err) {
      if (err.message === 'User did not share') {
      } else {
        Alert.alert(err.message);
      }
    }
  };

  console.log('SUPPORT screen was rendering ++++++++++++++++++++++++++++');

  return (
    <View style={styles.supportScreenContainer}>
      <View style={styles.supportScreen}>
        <Header
          // TODO: This part will increase later.
          screen="Compose"
          navigation={navigation}
          back="Market"
          continueTo="Market"
          left="Back"
          right="New"
        />

        <View style={styles.inputContainer}>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={handleInputText}
            placeholder="Compose your message here..."
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={share}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SupportMessageScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SupportMessageScreen;
